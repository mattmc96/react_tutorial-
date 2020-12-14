// import React from "react";
//
// const AppTest: React.FC = () => {
//   return <div></div>;
// };
// export default AppTest;
//
// export default interface User {}
//
//

const last = <T>(arr: T[]): T => {
  return arr[arr.length - 1];
};

const fruit = last([1, 2, 3]);

const fruit2 = last<string>(["a", "b", "c"]);

const makeArr = <T, Y>(x: T, y: Y): [T, Y] => {
  return [x, y];
};

const v = makeArr(5, 6);
const v2 = makeArr("a", "b");
const v3 = makeArr("a", 5);

export {};
