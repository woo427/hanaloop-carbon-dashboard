import { pool } from "@/lib/db";
import { error, success } from "@/lib/response";
import { EmissionFactorDto } from "@/types/emissionFactor";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await pool.query<EmissionFactorDto>(`
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
	      limit 1)
      `);

    const data = res.rows.map((row) => ({
      ...row,
      coeff: Number(row.coeff),
    }));

    return NextResponse.json(success(data));
  } catch {
    return NextResponse.json(error("최신 배출계수 조회 실패"));
  }
}
