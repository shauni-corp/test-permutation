const {run} = require("./code");

const random = () => Math.floor(Math.random() * (Math.floor(999999) - Math.ceil(1))) + Math.ceil(1);

const test1 = [random(), random()];
test(`Test avec les nombres ${test1[0]} et ${test1[1]}`, () => {
  expect(run(test1[1],test1[0])).toStrictEqual([test1[0],test1[1]]);
});

const test2 = [random(), random()];
test(`Test avec les nombres ${test2[0]} et ${test2[1]}`, () => {
  expect(run(test2[1],test2[0])).toStrictEqual([test2[0],test2[1]]);
});

const test3 = [random(), random()];
test(`Test avec les nombres ${test3[0]} et ${test3[1]}`, () => {
  expect(run(test3[1],test3[0])).toStrictEqual([test3[0],test3[1]]);
});