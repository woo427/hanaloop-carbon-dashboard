import api from "@/lib/api";
import { ApiResponse } from "@/types/apiResponse";
import { EmissionFactorDto } from "@/types/emissionFactor";

export const GET_pcf_summary = async (): Promise<ApiResponse<number>> => {
  return await api.get("/pcf/summary");
};

export const GET_current_emission_factor = async (): Promise<
  ApiResponse<EmissionFactorDto[]>
> => {
  return await api.get("/emission-factor/current-version");
};
