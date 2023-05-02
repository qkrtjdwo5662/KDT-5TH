const getNameCB = (callback: (str:string) => void) : void => {
  const name: string = 'park';
  setTimeout(() => {
    try{
      if(Math.floor(Math.random() * 2) % 2 === 0) {
        console.log('정상 케이스');
        callback(name);
      }else {
        console.log('error case');
        throw new Error('에러');
      }
    }catch(error){
      callback(error);
    }
  }, 2000);
}

test('2초 뒤에 이름을 받아옴', (done) => {
  function callback(data: any): void{
    try{
      if(data instanceof Error) {
        expect(data.message).toBe('에러');
      }else {
        expect(data).toBe('park2');
      }
      done();
    }catch(error){
      done(error);
    }
  }
  getNameCB(callback);
})