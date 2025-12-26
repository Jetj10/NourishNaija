import { CustomSDK } from "../lib/custom-sdk";

export function useBase44(entityName) {
  // This function mimics Base44's automatic entity SDK
  return new CustomSDK(entityName);
}