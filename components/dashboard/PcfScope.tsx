"use client";

import { useGetPcfScope } from "@/hooks/dashboard/useGetPcfScope";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { LabelList, Pie, PieChart } from "recharts";

const chartConfig = {
  Scope_1: {
    label: "Scope 1",
  },
  Scope_2: {
    label: "Scope 2",
  },
  Scope_3: {
    label: "Scope 3",
  },
} satisfies ChartConfig;

export default function PcfScope() {
  const { data: pcfScope } = useGetPcfScope();

  const chartData = [
    {
      scope: "Scope_1",
      data: pcfScope?.scope1,
      fill: "#E0F2FE",
    },
    {
      scope: "Scope_2",
      data: pcfScope?.scope2,
      fill: "#3B82F6",
    },
    {
      scope: "Scope_3",
      data: pcfScope?.scope3,
      fill: "#1E40AF",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xs text-center text-gray-500">
          스코프별 탄소 배출량
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <PieChart accessibilityLayer>
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Pie data={chartData} dataKey="data" nameKey="scope" />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
