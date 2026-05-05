"use client";

import { useGetCurrentEmissionFactors } from "@/hooks/dashboard/useGetCurrentEmissionFactor";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function CurrentEmissionFactor() {
  const { data: currentEmissionFactor } = useGetCurrentEmissionFactors();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="font-bold">현재 배출계수</CardTitle>
        <div className="text-xs text-gray-400">
          PCF 계산에 적용 중인 최신 기준값입니다.
        </div>
      </CardHeader>
      <CardContent>
        {currentEmissionFactor?.map((item) => (
          <div
            key={item.id}
            className="flex justify-between py-2 border-b last:border-b-0"
          >
            <p className="text-gray-700">{item.category}</p>
            <p className="w-[150px]">
              <span className="font-semibold text-lg pr-1">{item.coeff}</span>
              <span className="text-xs text-gray-600"> {item.unit}</span>
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
