const sum = (a:number, b:number):number => {
  return a+b;
}

test('typescript function test', () => {
  expect(sum(1,2)).toBe(3);
})