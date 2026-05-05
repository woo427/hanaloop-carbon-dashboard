import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function PcfSummary() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>11072.724 kgCO₂e</CardTitle>
      </CardHeader>
      <CardContent />
      <CardFooter>2025년 pcf 요약</CardFooter>
    </Card>
  );
}
