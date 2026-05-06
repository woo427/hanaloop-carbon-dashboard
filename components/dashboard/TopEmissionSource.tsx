"use client";

import { useGetTopEmissionSource } from "@/hooks/dashboard/useGetTopEmissionSource";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function TopEmissionSource() {
  const { data: top3EmissionSource } = useGetTopEmissionSource();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="font-bold">주요 배출원 Top3</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {top3EmissionSource?.map((item, index) => (
            <div
              key={item.category}
              className="flex items-center justify-between"
            >
              <div>
                <p className="text-sm text-gray-400">{index + 1}위</p>

                <p className="font-semibold">{item.category}</p>

                <p className="text-xs text-gray-400">{item.unit}</p>
              </div>

              <p className="text-xl font-bold">{item.pcf.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
