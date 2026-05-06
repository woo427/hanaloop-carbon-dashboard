"use client";

import { useGetPcfSummary } from "@/hooks/dashboard/useGetPcfSummary";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function PcfSummary() {
  const { data: pcfSummary } = useGetPcfSummary();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="font-bold pb-5 pt-10 pl-5 text-lg">
          탄소배출량 (PCF)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-end items-center mt-8">
          <p className="text-gray-500 text-lg">총</p>
          <p className="text-5xl font-bold pl-3">
            {pcfSummary?.toLocaleString()}
          </p>
          <p className="text-gray-500 pl-1 text-lg">tCO₂eq</p>
        </div>
      </CardContent>
    </Card>
  );
}
