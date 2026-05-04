export const success = (data: any) => ({
  status: "success",
  data,
});

export const error = (message: string) => ({
  status: "fail",
  message,
});
