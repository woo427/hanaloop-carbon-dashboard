import { pool } from "@/lib/db";
import { error, success } from "@/lib/response";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await pool.query<{ pcf: string }>(`
      select sum(a.amount * ef.coeff) as pcf
      from activities a
      join (
        select 
	        ef.category,
	        ef.coeff,
	        ef.unit
        from emission_factor ef 
        where ef.version_id = ( 
	        select id 
	        from emission_factor_version efv 
	        order by version desc 
	        limit 1 )
        ) ef
      on ef.category like '%' || a.description || '%'
      `);

    const data = Number(res.rows[0].pcf);

    return NextResponse.json(success(data));
  } catch {
    return NextResponse.json(error("pcf summary 조회 실패"));
  }
}
