import api from "@/lib/api";
import { ApiResponse } from "@/types/apiResponse";
import { EmissionFactorDto } from "@/types/emissionFactor";
import { PcfMonthlyDto } from "@/types/pcfMonthly";
import { PcfScopeDto } from "@/types/pcfScope";
import { TopEmissionSourceDto } from "@/types/topEmissionSource";

export const GET_pcf_summary = async (): Promise<ApiResponse<number>> => {
  return await api.get("/pcf/summary");
};

export const GET_current_emission_factor = async (): Promise<
  ApiResponse<EmissionFactorDto[]>
> => {
  return await api.get("/emission-factor/current-version");
};

export const GET_pcf_monthly = async (): Promise<
  ApiResponse<PcfMonthlyDto[]>
> => {
  return await api.get("/pcf/monthly");
};

export const GET_pcf_scope = async (): Promise<ApiResponse<PcfScopeDto>> => {
  return await api.get("/pcf/scope");
};

export const GET_top_emission_source = async (): Promise<
  ApiResponse<TopEmissionSourceDto[]>
> => {
  return await api.get("/pcf/top/emission");
};
