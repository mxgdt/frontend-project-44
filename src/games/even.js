#!/usr/bin/env node

import runEngine from '../index.js';
import getRandomInRange from '../math.js';

const even = () => {
  const rules = ('Answer "yes" if the number is even, otherwise answer "no".');
  const generateRound = () => {
    const randomNumber = getRandomInRange();
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    return [randomNumber, correctAnswer];
  };
  runEngine(rules, generateRound);
};

export default even;