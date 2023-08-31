#!/usr/bin/env node

import runEngine from '../index.js';
import getRandomInRange from '../math.js';

const getDivisor = (a, b) => {
  let x = a;
  let y = b;
  while (x !== y) {
    if (x > y) {
      x -= y;
    } else {
      y -= x;
    }
  }
  return x;
};

const gcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const generateRound = () => {
    const x = getRandomInRange();
    const y = getRandomInRange();
    const ex = `${x} ${y}`;
    const correctAnswer = getDivisor(x, y);
    return [ex, correctAnswer.toString()];
  };
  runEngine(rules, generateRound);
};

export default gcd;