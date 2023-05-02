const mkObj = (id, name) => {
  return { id, name, age:undefined }
}

test('toBe의 문제점 파악하기', () => {
  expect(mkObj('park', '박성재')).toEqual({id:'park', name:'박성재'})
})