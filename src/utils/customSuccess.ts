const CustomSuccess = (message: string, data?: any) => {
  console.log(message);
  return {
    error: false,
    message,
    data
  };
}

export { CustomSuccess };