const set = require('./set')

beforeEach( ()=> {
  s = new set();
})

test('it should be empty', () => {
  expect(s.isEmpty()).toBeTruthy();
})
test('it should be able to add an item', () => {
  expect(s.isEmpty()).toBeTruthy();
})
