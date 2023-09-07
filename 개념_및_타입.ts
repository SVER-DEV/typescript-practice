function a(b: number, c: number) {
  return b + c;
} // 이런식으로 타입을 지정 해줘야 함

// 나머지는 JS랑 비슷함
let num1: number = 1;
let num2: number = 2;
console.log(a(num1, num2));
// Boolean
let isLogin: boolean = false;
// Number
let num: number = 10;
// String
let str: string = "hi";
// Object
let obj: object = { name: "Name", age: 29 };
// Array, Tuple
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];
let arr3: [string, number] = ["hi", 10];
