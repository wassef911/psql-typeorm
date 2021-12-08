const CustomError = (message: string, data?: any) => {
    return {
        error: true,
        message,
        data
    };
}

export { CustomError };