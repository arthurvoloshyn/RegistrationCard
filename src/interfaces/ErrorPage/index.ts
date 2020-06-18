import { ContextType } from '../Context';

export interface ErrorPagePropsInterface {
  statusCode: ContextType;
}

export type ErrorPageType = ErrorPagePropsInterface | Promise<ErrorPagePropsInterface>;
