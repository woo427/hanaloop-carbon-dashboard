import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function TopEmissionSource() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>최대 배출원</CardTitle>
      </CardHeader>
      <CardContent>
        <p>1. 전기 사용</p>
        <p>2. 운송</p>
        <p>3. 플라스틱</p>
      </CardContent>
    </Card>
  );
}
