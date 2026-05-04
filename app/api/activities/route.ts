import { pool } from "@/lib/db";
import { NextResponse } from "next/server";
import { ActivityDto } from "@/types/activity";
import { success } from "@/lib/response.ts";

export async function GET() {
  try {
    const res = await pool.query<ActivityDto>(`
      select * from activities
    `);

    return NextResponse.json(success(res.rows));
  } catch {
    return NextResponse.json(fail("activities 데이터 조회 실패"));
  }
}
