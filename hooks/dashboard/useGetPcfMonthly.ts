import { GET_pcf_monthly } from "@/app/services/dashboard/api";
import { useQuery } from "@tanstack/react-query";

export const useGetPcfMonthly = () => {
  return useQuery({
    queryKey: ["pcf-monthly"],
    queryFn: () => GET_pcf_monthly(),
    select: ({ data }) => data.data,
  });
};
