const CustomSuccess = (message: string, data?: any) => {
  console.log(message, data);
  return {
    error: false,
    message,
    data
  };
}

export { CustomSuccess };