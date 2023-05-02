const sum = require('./func');

test('1 더하기 2를 리턴하는 함수 sum은 잘 작동?', () => {
  //expect(검증 대상).toXXX(기대 결과);
  expect(sum(1,2)).toBe(3);
});

test('변수의 얕은 비교', () => {
  const str='test';
  expect(str).toBe('test');
})

test('변수의 깊은 비교', () => {
  const str='test';
  expect(str).toEqual('test');
})