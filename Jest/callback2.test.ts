const getNameCB2 = (callback: (str:string) => void) : void => {
  const name: string = 'park';
  setTimeout(() => {
    callback(name);
  }, 2000);
}

test("2초 후에 이름을 받아오는 콜백 함수 테스트", (done) => { function callback(name: string): void {
  expect(name).toBe("park");
  done(); 
}

getNameCB2(callback);
});