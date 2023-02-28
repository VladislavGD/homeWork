//TASK: Separate array elements in new arrays

// TASK: Given the array: numbersArr bellow, write the code (using a for loop) which will create two new arrays:
// evenNums - which elements will be the positive even numbers from numbersArr.
// oddNums - which elements will be the negative odd numbers from numbersArr.

// Note that the Zero is neither positive nor negative number!

const numbersArr = [1, 6, -3, 5, 2, -8, 0, 4, 3];

let evenNums = [];
let oddNums = [];
for (let index = 0; index < numbersArr.length; index++) {
  if (numbersArr[index] != 0) {
    if (numbersArr[index] % 2 == 0 && numbersArr[index] > 0) {
      evenNums.push(numbersArr[index]);
    } else {
      oddNums.push(numbersArr[index]);
    }
  }
}

for (let i = 0; i < evenNums.length; i++) {
  console.log(evenNums[i]);
}

//TASK:
//да се дефинира функция calcRectangleArea(), която връща лицето на правоъгълник, със зададени дължина и ширина:

let rectWidth = 6;
let rectHeight = 3;

function calcRectangleArea(rectWidth, rectHeight) {
  let result = rectWidth * rectHeight;
  console.log(result);
}

calcRectangleArea(rectWidth, rectHeight);

/********************************/
//TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

let numbers = [2, -4, 5, 3, 12, 0, 1];
let even = 0;
let max = 0;
function findMaxEven(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (max < numbers[i]) {
      max = numbers[i];
    }
    if (max % 2 === 0) {
      let even = max;
    }
  }

  console.log(
    `The max even number from array ${"[" + numbers + "]"} is ${max}`
  );
}
findMaxEven(numbers);
/********* getHigherScoreIndex - Task **********/
//TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.

let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 4, 6];
let maxScore = 0;
let nameStudentMaxScore = 0;

let getHighestScoreIndex = function () {
  for (let i = 0; i < scores.length; i++) {
    if (maxScore < scores[i]) {
      maxScore = scores[i];
      nameStudentMaxScore = i;
    }
  }

  console.log(
    `The student ${students[nameStudentMaxScore]} is with max socre ${maxScore}`
  );
};

/********* SumEven2DimArrayElements - Task ******/
//TASK: Да се дефинира функция SumEven2DimArrayElements(), която връща сумата от четните елементи на подаденият й двумерен масив.

let arr = [
  [1, 2, 3],
  [4, 5, 6],
];

function SumEven2DimArrayElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > 0 && arr[i][j] % 2 === 0) {
        sum += arr[i][j];
      }
    }
  }
  return sum;
}
let sum = SumEven2DimArrayElements(arr);
console.log(sum);

//TASK: да се дефинира функция calcRectangleArea(), която връща лицето на правоъгълник, със зададени като пропъртита на обект дължина и ширина:

let rectangle = {
  width: 6,
  height: 3,
};

let result = 0;
let area = calcRectangleArea(rectangle);

function calcRectangleArea() {
  return rectangle.width * rectangle.height;
}

console.log(`The area of rectangle is: ${area}`);
