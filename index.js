function multipliable(a, b, result) {
  const left = a.split('');
  const right = b.split('');

  const current = {};
  left.forEach(letter => current[letter] = 0);
  right.forEach(letter => current[letter] = 0);

  let digits = Object.keys(current).length;

  for (let i = 0; i <= 10 ** (digits) - 1; i++) {
    const currentNums = String(i).padStart(digits, '0').split('');

    Object.keys(current).forEach((letter, i) => current[letter] = currentNums[i]);

    const leftCurr = Number(left.map(letter => current[letter]).join(''));
    const rightCurr = Number(right.map(letter => current[letter]).join(''));

    if (leftCurr * rightCurr === Number(result)) return true;
  }
  
  return false;
}

multipliable('AB', 'AB', '100');

module.exports = multipliable;