#!/usr/bin/env node
import runEngine from '../index.js';
import getRandomInRange from '../math.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const prime = () => {
  const rules = ('Answer "yes" if given number is prime. Otherwise answer "no".');
  const generateRound = () => {
    const randomNumber = getRandomInRange(1, 100);
    const correctAnswer = (isPrime(randomNumber)) ? 'yes' : 'no';

    return [randomNumber, correctAnswer];
  };
  runEngine(rules, generateRound);
};
export default prime;