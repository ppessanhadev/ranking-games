export class CustomError extends Error {
  statusCode: number;
  constructor(data: { message: string; statusCode: number }) {
    super(data.message);
    this.statusCode = data.statusCode;
  }
}
