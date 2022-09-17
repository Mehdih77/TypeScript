"use strict";
class Invoice {
    //   readonly client: string;
    //   private details: string;
    //   public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invoices = [];
invoices.forEach((inv) => {
    console.log(inv.client, inv.format());
});
// form
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// button
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
});
