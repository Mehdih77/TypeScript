"use strict";
/////////////###############//////////////
// with GENERICS we can handle types the we dont know what it would be!?
// important notice word => extends
/////////////###############//////////////
//! T can be anyyyything
// const addUID = <T>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };
//! T is an object
// const addUID = <T extends {}>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };
//! T is an object that should have a name property
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({
    name: "Mehdi",
    age: 24,
});
console.log(docOne);
const docTwo = {
    uid: 1,
    resourceName: "resource two",
    data: { name: "mehdi" },
};
const docThree = {
    uid: 2,
    resourceName: "resource three",
    data: ["mehdi", "hello"],
};
