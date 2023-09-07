function sum(a: number, b: number): number {
  return a + b;
} // 변수 말고도 리턴 값의 타입까지 지정해줄 수 있다.
/* 만약 아래와 같이 인수가 부족한 경우에도 에러 핸들링으로 a 값을 리턴하고 싶다던지 하는 
     특수한 상황에 있다면, b?:number 등의 형태로 사용하면 된다.

     단, 필수 파라미터가 선택적 파라미터 보다 더 빨리 와야 한다. 굳이 더 빨리 써야 한다면, | 와 undefined를 사용하자.
     예) a: number | undefined, b: number
  */
// sum(1); // 이 경우 인수가 부족하므로 사용이 불가능하다.
// sum(1, 2, 3); // 이 경우엔 인수가 너무 많아서 사용이 불가능하다.

function sum2(a = 1, b: number): number {
  return a + b;
}
//sum(undefined, 3); // 기본값을 정의하여 사용 가능... 인데 컴파일러 문제인지 작동하지 않는다. 이 부분은 나중에 실제로 활용 해보면서 써봐야겠다.

function sum3(nums: number[]): number {
  let total: number = 0;
  for (let key in nums) {
    total += nums[key];
  }
  return total;
} // 리스트도 넣을 수 있다.

interface User {
  name: string;
}
// 인터페이스란? 변수들의 타입을 먼저 지정해주고, 변수의 타입을 해당 인터페이스로 설정해 줌으로써 복잡한 타입 체크에서 조금 벗어나게 해준다.

const todo: User = { name: "가나다" };
// 이런식으로 쓸 수 있다.

//this는 내일 일어나서 해야겠다. 으악 졸려
