import { HasFormatter } from "../interfaces/HasFormatter";

export class Payment implements HasFormatter {
  constructor(
    readonly resipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.resipient} is owed $${this.amount} for ${this.details}`;
  }
}
