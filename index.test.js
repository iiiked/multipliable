const multipliable = require('./index');

test('detects whether numbers multipliable', () => {
  expect(multipliable('AB', 'C', '21')).toBe(true);
  expect(multipliable('AB', 'AB', '100')).toBe(true);
  expect(multipliable('AAA', 'BBB', '110889')).toBe(true);
  expect(multipliable('DCA', 'DBCF', '1000000')).toBe(true);
  expect(multipliable('AB', 'BA', '100')).toBe(false);
  expect(multipliable('AAA', 'AAA', '100000')).toBe(false);
});

test('works with single-digit input', () => {
  expect(multipliable('A', 'A', '0')).toBe(true);
  expect(multipliable('A', 'A', '25')).toBe(true);
  expect(multipliable('A', 'A', '2')).toBe(false);
});

test('accounts for case of the input', () => {
  expect(multipliable('A', 'a', '2')).toBe(true);
  expect(multipliable('a', 'a', '2')).toBe(false);
});

/********** EXTRA CREDIT ONLY **********

test('works with BIG numbers', () => {
  expect(multipliable('CODEWORKS', 'AWESOME', '957443700165410')).toBe(true);
});

****************************************/
