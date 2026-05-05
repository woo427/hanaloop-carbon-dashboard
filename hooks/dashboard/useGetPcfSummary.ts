import { GET_pcf_summary } from "@/app/services/dashboard/api";
import { useQuery } from "@tanstack/react-query";

export const useGetPcfSummary = () => {
  return useQuery({
    queryKey: ["pcf-summary"],
    queryFn: () => GET_pcf_summary(),
    select: ({ data }) => data.data,
  });
};
