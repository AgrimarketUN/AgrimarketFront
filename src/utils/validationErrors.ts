import { TypeWithKey } from "@/models";

export const getValidationError = (errorCode: any) => {
  const codeMatcher: TypeWithKey<string> = {
    ERR_NETWORK: "Network Error",
    //mensajes de error
  };

  return codeMatcher[errorCode]
};