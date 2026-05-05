import { pool } from "@/lib/db";
import { NextResponse } from "next/server";
import { ActivityDto } from "@/types/activity";
import { success, error } from "@/lib/response";

export async function GET() {
  try {
    const res = await pool.query<ActivityDto>(`
      select * from activities
    `);

    const data = res.rows.map((row) => ({
      ...row,
      amount: Number(row.amount),
    }));

    return NextResponse.json(success(data));
  } catch {
    return NextResponse.json(error("activities 데이터 조회 실패"));
  }
}
