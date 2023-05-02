interface User {
  email:string;
  name:string;
  age:number;
}

const users :User[]= [
  {
    email: 'qkrtjdwo5662@naver.com',
    name: '박성재',
    age: 28,
  },{
    email: 'psjj03@naver.com',
    name: '박성재2',
    age: 28,
  },{
    email: 'psjj00@naver.com',
    name: '박성재3',
    age: 28,
  }
]

const getUsers = () : User[] => {
  return users;
}

const getUserAge = () : number[] => {
  return users.map((el) => el.age);
}

const getCountsOverAge = (age:number) : number => {
  const resultArr: User[] = users.filter((el:User) => el.age > age);
  return resultArr.length;
}

const getUserEmail = () : string[] => {
  return users.map((el) => el.email);
}

const getUserByEmail = (name: string): string => {
  const findUser: User | undefined = users.find((el:User)=> el.name.indexOf(name) !== -1);
  if(findUser) return findUser.email;
  return '해당 이름을 가진 회원은 없어요';
}

test('전체 회원의 수는 4명인가?', () => {
  expect(getUsers()).toHaveLength(3);
})

test('전체 회원 중 특정 회원 존재 여부', () => {
  expect(getUsers()).toContainEqual({
    email: 'qkrtjdwo5662@naver.com',
    name: '박성재',
    age: 28,
  })
})

test('25살 이상인 회원 2명 이상?', () => {
  expect(getCountsOverAge(25)).toBeGreaterThan(2);
})

test('email 주소 형식과 맞는지', () => {
  expect(getUserByEmail('박성재')).toMatch(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9-.]+$/ );
})