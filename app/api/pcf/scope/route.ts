import { pool } from "@/lib/db";
import { error, success } from "@/lib/response";
import { ActivityDto } from "@/types/activity";
import { EmissionFactorDto } from "@/types/emissionFactor";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const activities = await pool.query<ActivityDto>(`
      select * from activities`);

    const emissionFactor = await pool.query<EmissionFactorDto>(`
      select
	      ef.id,
	      ef.version_id, 
	      ef.category,
	      ef.coeff,
	      ef.unit
      from emission_factor ef 
      where ef.version_id = ( 
	      select id 
	      from emission_factor_version efv 
	      order by version desc 
	      limit 1)`);

    const scope = {
      scope1: 0,
      scope2: 0,
      scope3: 0,
    };

    activities.rows.forEach((activity) => {
      const factor = emissionFactor.rows.find((item) =>
        item.category.includes(activity.description),
      );

      if (!factor) return;

      const pcf = factor.coeff * activity.amount;

      if (activity.category === "전기") {
        scope.scope2 += pcf;
      }
      if (activity.category === "원소재") {
        scope.scope3 += pcf;
      }
      if (activity.category === "운송") {
        scope.scope3 += pcf;
      }
    });

    return NextResponse.json(success(scope));
  } catch {
    return NextResponse.json(error("스코프별 pcf 계산 조회 실패"));
  }
}
