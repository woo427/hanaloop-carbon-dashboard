import CurrentEmissionFactor from "@/components/dashboard/CurrentEmissionFactor";
import PcfSummary from "@/components/dashboard/PcfSummary";
import TopEmissionSource from "@/components/dashboard/TopEmissionSource";

export default function Home() {
  return (
    <div>
      {/* 상단 */}
      <div className="grid grid-cols-3 gap-8 p-5">
        <PcfSummary />
        <TopEmissionSource />
        <CurrentEmissionFactor />
      </div>
    </div>
  );
}
