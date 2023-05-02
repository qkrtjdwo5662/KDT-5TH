const throwErr = ():never => {
  throw new Error('에러 발생!');
}

test('에러가 발생하는가', () => {
  expect(()=> throwErr()).toThrow();
})