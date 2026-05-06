import { pool } from "@/lib/db";
import { error, success } from "@/lib/response";
import { EmissionFactorDto } from "@/types/emissionFactor";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const activities = await pool.query(`
      select category, description, sum(amount) as amount
      from activities
      group by category, description
      `);

    const factors = await pool.query<EmissionFactorDto>(`
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

    const res = activities.rows
      .map((activity) => {
        const factor = factors.rows.find((item) =>
          item.category.includes(activity.description),
        );

        if (!factor) return;

        const pcf = factor?.coeff * activity.amount;

        return {
          category: factor.category,
          pcf,
          unit: factor.unit,
        };
      })
      .filter((item) => item != null)
      .sort((a, b) => b?.pcf - a?.pcf)
      .slice(0, 3);

    return NextResponse.json(success(res));
  } catch {
    return NextResponse.json(error("top3 배출원 조회 실패"));
  }
}
