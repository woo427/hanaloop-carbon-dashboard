import { GET_current_emission_factor } from "@/app/services/dashboard/api";
import { useQuery } from "@tanstack/react-query";

export const useGetCurrentEmissionFactors = () => {
  return useQuery({
    queryKey: ["current-emission-factor"],
    queryFn: () => GET_current_emission_factor(),
    select: ({ data }) => data.data,
  });
};
