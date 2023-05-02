const getNamePromise = ():Promise<string> => {
  const name='park';
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if(Math.floor(Math.random()*2) %2 ===0){
        console.log('정상케이스');
        resolve(name);
      } else {
        console.log('에러 케이스');
        reject(new Error('에러'));
      }
    }, 2000)
  })
};

test('2초후에 이름을 받아옴', () => {
  return getNamePromise().then((name:string) => {
    expect(name).toBe('park');
  })
  .catch((err) => {
    expect(err.message).toBe("에러");
  })
})