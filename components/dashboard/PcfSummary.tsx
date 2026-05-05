"use client";

import { useGetPcfSummary } from "@/hooks/dashboard/useGetPcfSummary";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function PcfSummary() {
  const { data: pcfSummary } = useGetPcfSummary();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="font-bold pb-5">탄소배출량 (PCF)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-end items-center">
          <p className="text-gray-500">총</p>
          <p className="text-4xl font-bold pl-3">
            {pcfSummary?.toLocaleString()}
          </p>
          <p className="text-gray-500 pl-1">tCO₂eq</p>
        </div>
      </CardContent>
      <p className="border-b" />
    </Card>
  );
}
