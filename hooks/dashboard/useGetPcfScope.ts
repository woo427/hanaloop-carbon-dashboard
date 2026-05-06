import { GET_pcf_scope } from "@/app/services/dashboard/api";
import { useQuery } from "@tanstack/react-query";

export const useGetPcfScope = () => {
  return useQuery({
    queryKey: ["pcf-scope"],
    queryFn: () => GET_pcf_scope(),
    select: ({ data }) => data.data,
  });
};
