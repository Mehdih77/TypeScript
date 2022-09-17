class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

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
  console.log(e);
});
