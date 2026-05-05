import CurrentEmissionFactor from "@/components/dashboard/CurrentEmissionFactor";
import PcfMonthly from "@/components/dashboard/PcfMonthly";
import PcfSummary from "@/components/dashboard/PcfSummary";
import TopEmissionSource from "@/components/dashboard/TopEmissionSource";

export default function Home() {
  return (
    <div className="p-5">
      <div className="grid grid-cols-3 gap-8 pb-5">
        <PcfSummary />
        <TopEmissionSource />
        <CurrentEmissionFactor />
      </div>
      <PcfMonthly />
    </div>
  );
}
