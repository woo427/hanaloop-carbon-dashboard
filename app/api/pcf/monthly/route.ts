import { pool } from "@/lib/db";
import { error, success } from "@/lib/response";
import { PcfMonthlyDto } from "@/types/pcfMonthly";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await pool.query<PcfMonthlyDto>(`
      select to_char(date_trunc('month', a.date), 'YYYY-MM') as date, sum(a.amount * ef.coeff) as pcf
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
      group by date_trunc('month',a.date)
      `);

    const data = res.rows.map((row) => ({
      ...row,
      pcf: Number(row.pcf),
    }));

    return NextResponse.json(success(data));
  } catch {
    return NextResponse.json(error("월별 pcf 조회 실패"));
  }
}
