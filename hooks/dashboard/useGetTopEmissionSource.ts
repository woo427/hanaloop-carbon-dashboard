import { GET_top_emission_source } from "@/app/services/dashboard/api";
import { useQuery } from "@tanstack/react-query";

export const useGetTopEmissionSource = () => {
  return useQuery({
    queryKey: ["top3-emission-source"],
    queryFn: () => GET_top_emission_source(),
    select: ({ data }) => data.data,
  });
};
