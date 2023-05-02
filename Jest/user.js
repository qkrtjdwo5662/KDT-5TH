const user = [
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

// console.log(user);
// console.log(user.map((el)=> el.email));

console.log(user.find((el) => el.name==='박성재'));