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

export default function CalculatorForm() {
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
            <form>
              <div className="grid grid-cols-[80px_192px] items-center gap-y-8">
                <label>전기</label>
                <Input className="w-48" />

                <label>원소재</label>
                <Input className="w-48" />

                <label>운송</label>
                <Input className="w-48" />
              </div>
            </form>
            <div className="flex justify-end pt-8">
              <Button>결과 확인하기</Button>
            </div>
          </div>

          <div className="flex flex-col items-center border rounded-xl">
            <p className="text-sm text-gray-500 mt-5">예상 PCF</p>
            <div>
              <span className="text-3xl font-bold mt-2">0.00 </span>
              <span className="text-sm text-gray-500">tCO₂eq</span>
            </div>
            <p className="text-gray-500 mt-8 mb-2">배출 비중</p>
            <div className="mb-5">
              <div className="flex">
                <p className="w-16 text-gray-500 mr-3">전기</p>
                <div>30</div>
                <p>%</p>
              </div>
              <div className="flex">
                <p className="w-16 text-gray-500 mr-3">원소재</p>
                <div>30</div>
                <p>%</p>
              </div>
              <div className="flex">
                <p className="w-16 text-gray-500 mr-3">운송</p>
                <div>30</div>
                <p>%</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
