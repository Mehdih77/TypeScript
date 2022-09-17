export class Payment {
    constructor(resipient, details, amount) {
        this.resipient = resipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.resipient} is owed $${this.amount} for ${this.details}`;
    }
}
