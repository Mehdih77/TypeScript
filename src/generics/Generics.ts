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
const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({
  name: "Mehdi",
  age: 24,
});
console.log(docOne);

//////////////////////////////////////////////////////////////////////////////////////////////

// interface Resources<T extends object> {
//   uid: number;
//   resourceName: string;
//   data: T;
// }

interface Resources<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docTwo: Resources<object> = {
  uid: 1,
  resourceName: "resource two",
  data: { name: "mehdi" },
};

const docThree: Resources<string[]> = {
  uid: 2,
  resourceName: "resource three",
  data: ["mehdi", "hello"],
};
