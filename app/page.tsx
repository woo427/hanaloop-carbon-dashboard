import CurrentEmissionFactor from "@/components/dashboard/CurrentEmissionFactor";
import PcfMonthly from "@/components/dashboard/PcfMonthly";
import PcfScope from "@/components/dashboard/PcfScope";
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
      <div className="grid grid-cols-2 gap-8">
        <PcfMonthly />
        <PcfScope />
      </div>
    </div>
  );
}
