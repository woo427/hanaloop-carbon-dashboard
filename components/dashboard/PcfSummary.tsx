"use client";

import { useGetPcfSummary } from "@/hooks/dashboard/useGetPcfSummary";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function PcfSummary() {
  const { data: pcfSummary } = useGetPcfSummary();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{pcfSummary} kgCO₂e</CardTitle>
      </CardHeader>
      <CardContent />
      <CardFooter>2025년 pcf 요약</CardFooter>
    </Card>
  );
}
