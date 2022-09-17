import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
// form
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// List
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
// button
form.addEventListener("submit", (e) => {
    e.preventDefault();
    //* tuples
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
