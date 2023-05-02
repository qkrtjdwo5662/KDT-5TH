const getNameAsync = (id:string):Promise<string> => {
  const name = '박성재';
  return new Promise<string>((res, rej) => {
    setTimeout(() => {
      if(id === 'park') {
        console.log('정상케이스');
        res(name);
      }else {
        console.log('에러 케이스');
        rej(new Error('id가 다릅니다'))
      }
    }, 2000)
  }) 
} 

test('2초 후에 이름을 받는 함수 테스트', async() => {
  try{
    const result: any = await getNameAsync('park1');
    expect(result).toBe('박성재');
  }catch(err){
    expect(err.message).toBe('id가 다릅니다');
  }
})