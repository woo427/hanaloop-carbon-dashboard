import api from "@/lib/api";
import { ApiResponse } from "@/types/apiResponse";

export const GET_pcf_summary = async (): Promise<ApiResponse<number>> => {
  return await api.get("/pcf/summary");
};
