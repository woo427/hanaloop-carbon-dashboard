export interface ApiResponse<T> {
  data: {
    status: string;
    data: T;
  };
}