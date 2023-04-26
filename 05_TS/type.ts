let myName: string ='park';
let numArr: number[]=[1,2,3,4];
let strArr: Array<string> = ['월','화', '수', '목','금','토','일'];
let comObj : object= {}
let parkObj : {name:string; age:number; hobbies: string[]} ={
  name:'park',
  age: 24,
  hobbies:['playing','riding']
}

// null, undefined
let nullData: null = null;
let undefinedData: undefined = undefined;

// tuple 타입
let tupleOne : [number, string, object] = [1, 'park', { isMember:false }]

//enum
enum MemberGrade {
  guest = 0,
  user = 1,
  member = 2,
  admin = 3,
}
let userGrade: number = 1;

if(userGrade!==3) {
  console.log('관리자 권한 X')
}
if(userGrade!==MemberGrade.admin) {
  console.log('관리자 권한 X')
}

//union
let unionType : number | string | number[] = 1;
unionType = 'park';
unionType =  23;
unionType = [1,2,3];

let gender: 'M' | 'F' = 'F';

//any
let anyType : any = 'park'
anyType = 3;
anyType = [1,2,3];

//return type function
function add1(num1: number, num2: number): number{
  return num1 + num2;
}

const add2 = function(num1: number, num2: number): number {
  return num1 + num2;
}

const add3 = (num1: number, num2: number): number => num1 + num2;

//void type function
function useConsole1(str: string): void {
  console.log(str);
}

const useConsole2 = function(str: string) {
  console.log(str);
}

//never type function
function occurError(err: string): never {
  throw new Error(err);
}

//Type 사용하기
//type을 변수화
type numOrStr = string | number;
let dontKnow: numOrStr = 1;

type grade = 'A'|'B'|'C'|'D'|'E';
let studentGrade: grade = 'A';
let studentGradeArr: grade[] = ['A','E','C'];

// Interface 사용
interface User {
  name: string;
  id: string;
  age: number;
  isMember: boolean;
  notRequire? : boolean; // 꼭 필수 값이 아닌 값은 ?로 대체
  [additional: number] : string;
}

let parkInfo: User = {
  name: 'park',
  id:'qkrtjdwo5662',
  age: 28,
  isMember: true,
  1: 'A',
  2: 'F',
}

// 함수에 interface 적용
interface Add {
  (num1 : number, num2: number): number;
}

const interfaceAdd: Add = (x, y) => {
  return x+y;
}