const questions = [];
const rightAnswers = [];
const rules = 'What is the result of the expression?';

for (let i = 0; i < 3; i += 1) {
  const temp = [0, 0, 0];
  temp[1] = ['+', '-', '*'][Math.floor(Math.random() * 3)];
  if (temp[1] === '*') {
    temp[0] = Math.floor(Math.random() * 15);
    temp[2] = Math.floor(Math.random() * 15);
  } else {
    temp[0] = Math.floor(Math.random() * 50);
    temp[2] = Math.floor(Math.random() * 50);
  }
  questions.push(temp);
}

for (let i = 0; i < 3; i += 1) {
  if (questions[i][1] === '+') {
    rightAnswers.push(String(questions[i][0] + questions[i][2]));
  } else if (questions[i][1] === '-') {
    rightAnswers.push(String(questions[i][0] - questions[i][2]));
  } else {
    rightAnswers.push(String(questions[i][0] * questions[i][2]));
  }
}
export { questions, rightAnswers, rules };