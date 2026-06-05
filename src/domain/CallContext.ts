export type CustomerType = "VIP" | "NORMAL";

export interface CallContext {
  caller: string;
  callee: string;
  durationSeconds: number;
  customerType: CustomerType;
  startedAt: Date;
}
