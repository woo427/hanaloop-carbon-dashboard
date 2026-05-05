import PcfSummary from "@/components/dashboard/PcfSummary";
import TopEmissionSource from "@/components/dashboard/TopEmissionSource";

export default function Home() {
  return (
    <div>
      {/* 상단 */}
      <div className="grid grid-cols-2 gap-8 p-5">
        <PcfSummary />
        <TopEmissionSource />
      </div>
    </div>
  );
}
