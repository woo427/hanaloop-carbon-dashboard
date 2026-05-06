"use client";

import { useGetPcfMonthly } from "@/hooks/dashboard/useGetPcfMonthly";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const chartConfig = {
  data: {
    label: "탄소배출량 (tCO₂eq)",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export default function PcfMonthly() {
  const { data: pcfMonthly } = useGetPcfMonthly();

  const chartData = pcfMonthly?.map((item) => ({
    month: item.date,
    data: item.pcf,
  }));
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xs text-center text-gray-500">
          월별 탄소 배출량
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 7)}
            />
            <YAxis tickLine={false} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="data" fill="var(--color-data)" radius={4} />
          </BarChart>
        </ChartContainer>
        <p className="pt-3 text-center text-[10px] text-gray-400">
          활동 데이터가 없는 월은 그래프에 표시되지 않습니다.
        </p>
      </CardContent>
    </Card>
  );
}
