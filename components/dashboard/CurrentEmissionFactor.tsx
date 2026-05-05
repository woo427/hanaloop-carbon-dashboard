"use client";

import { useGetCurrentEmissionFactors } from "@/hooks/dashboard/useGetCurrentEmissionFactor";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function CurrentEmissionFactor() {
  const { data: currentEmissionFactor } = useGetCurrentEmissionFactors();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>현재 배출계수</CardTitle>
      </CardHeader>
      <CardContent>
        {currentEmissionFactor?.map((item) => (
          <div key={item.id}>
            <p>
              {item.category} {item.coeff} {item.unit}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
