const CustomSuccess = (message: string, data?: any) => {
  return {
    error: false,
    message,
    data
  };
}

export { CustomSuccess };