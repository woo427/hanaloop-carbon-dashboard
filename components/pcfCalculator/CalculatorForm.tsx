"use client";

import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CalculatorFormDto } from "@/types/calculatorForm";
import { useGetCurrentEmissionFactors } from "@/hooks/dashboard/useGetCurrentEmissionFactor";
import { useState } from "react";

export default function CalculatorForm() {
  const { data: currentEmissionFactor } = useGetCurrentEmissionFactors();
  const [calPcf, setCalPcf] = useState(0);
  const [ratio, setRatio] = useState({
    elec: 0,
    plastic: 0,
    trans: 0,
  });
  const [showResult, setShowResult] = useState(false);

  const elecFactor = currentEmissionFactor?.find((item) =>
    item.category.includes("전기"),
  )?.coeff;

  const plastic1Factor = currentEmissionFactor?.find((item) =>
    item.category.includes("플라스틱 1"),
  )?.coeff;

  const plastic2Factor = currentEmissionFactor?.find((item) =>
    item.category.includes("플라스틱 2"),
  )?.coeff;

  const transFactor = currentEmissionFactor?.find((item) =>
    item.category.includes("운송"),
  )?.coeff;

  const { register, handleSubmit } = useForm<CalculatorFormDto>({
    defaultValues: {
      elec: "",
      plastic1: "",
      plastic2: "",
      trans: "",
    },
  });

  const onSubmit = (data: CalculatorFormDto) => {
    setShowResult(true);
    const elec = Number(data.elec || 0);
    const plastic1 = Number(data.plastic1 || 0);
    const plastic2 = Number(data.plastic2 || 0);
    const trans = Number(data.trans || 0);

    const elecPcf = elec * (elecFactor ?? 0);
    const plastic1Pcf = plastic1 * (plastic1Factor ?? 0);
    const plastic2Pcf = plastic2 * (plastic2Factor ?? 0);
    const transPcf = trans * (transFactor ?? 0);

    const total = elecPcf + plastic1Pcf + plastic2Pcf + transPcf;

    setCalPcf(total);

    setRatio({
      elec: (elecPcf / total) * 100,
      plastic: ((plastic1Pcf + plastic2Pcf) / total) * 100,
      trans: (transPcf / total) * 100,
    });
  };

  return (
    <div className="flex justify-center px-8 pt-14">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="font-bold text-lg">
            탄소발자국(PCF) 계산
          </CardTitle>
          <CardDescription className="text-xs">
            전기, 원소재, 운송 데이터를 입력하면 PCF가 계산됩니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 p-5 gap-y-10 md:grid-cols-2 md:mr-10">
          <div className="w-fit">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-[80px_192px] items-center gap-y-8">
                <label>전기</label>
                <Input
                  step="any"
                  {...register("elec", { valueAsNumber: true })}
                  placeholder="데이터를 입력해 주세요."
                  className="w-48 text-sm"
                />

                <label>플라스틱 1</label>
                <Input
                  type="number"
                  step="any"
                  {...register("plastic1", { valueAsNumber: true })}
                  placeholder="데이터를 입력해 주세요."
                  className="w-48 text-sm"
                />

                <label>플라스틱 2</label>
                <Input
                  type="number"
                  step="any"
                  {...register("plastic2", { valueAsNumber: true })}
                  placeholder="데이터를 입력해 주세요."
                  className="w-48 text-sm"
                />

                <label>운송</label>
                <Input
                  type="number"
                  step="any"
                  {...register("trans", { valueAsNumber: true })}
                  placeholder="데이터를 입력해 주세요."
                  className="w-48 text-sm"
                />
              </div>
              <div className="flex justify-end pt-8">
                <Button type="submit">결과 확인하기</Button>
              </div>
            </form>
          </div>
          {showResult ? (
            <div className="flex flex-col items-center border rounded-xl">
              <p className="text-sm text-gray-500 mt-10 mb-3">예상 PCF</p>
              <div>
                <span className="text-3xl font-bold mt-2">
                  {calPcf.toFixed(2)}{" "}
                </span>
                <span className="text-sm text-gray-500">tCO₂eq</span>
              </div>
              <p className="text-gray-500 mt-10 mb-3">배출 비중</p>
              <div className="mb-5">
                <div className="flex items-center">
                  <p className="w-16 text-gray-500 mr-3">전기</p>
                  <div className="text-lg">{ratio.elec.toFixed(2)}</div>
                  <p className="text-gray-500">%</p>
                </div>
                <div className="flex items-center">
                  <p className="w-16 text-gray-500 mr-3">원소재</p>
                  <div className="text-lg">{ratio.plastic.toFixed(2)}</div>
                  <p className="text-gray-500">%</p>
                </div>
                <div className="flex items-center">
                  <p className="w-16 text-gray-500 mr-3">운송</p>
                  <div className="text-lg">{ratio.trans.toFixed(2)}</div>
                  <p className="text-gray-500">%</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center border rounded-xl text-gray-400">
              데이터를 입력하여 계산 결과를 확인해 보세요.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
