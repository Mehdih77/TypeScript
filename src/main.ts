import { Invoice } from "./classes/Invoice.js";

const invOne = new Invoice("mario", "work on the mario website", 250);

console.log(invOne);

// invoices List
const invoices: Invoice[] = [];

invoices.forEach((inv) => {
  console.log(inv.client, inv.format());
});

// form
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// button
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
