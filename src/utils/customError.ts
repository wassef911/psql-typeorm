export class CustomError extends Error {
    private httpStatusCode: number;

    constructor(
        httpStatusCode: number,
        message: string,
    ) {
        super(message);
        this.name = this.constructor.name;
        this.httpStatusCode = httpStatusCode;
    }

    get JSON(): ErrorResponse {
        return {
            error: true,
            errorMessage: this.message,
            httpStatusCode: this.httpStatusCode
        };
    }
}

type ErrorResponse = {
    error: true;
    errorMessage: string;
    httpStatusCode: number;
};

export type ErrorValidation = { [key: string]: string };
