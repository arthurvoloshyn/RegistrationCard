export interface ErrorPagePropsInterface {
  statusCode: number;
}

export type ErrorPageType = ErrorPagePropsInterface | Promise<ErrorPagePropsInterface>;
