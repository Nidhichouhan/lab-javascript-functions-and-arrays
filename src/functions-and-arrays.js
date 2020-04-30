// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a, b) {
  var a, b;
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return a || b;
  }
}
// Progression #2: The lengthy word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];
function findScaryWord(words) {
  if (words == [] || words == "" || words == null) {
    return null;
  }
  let longestword = "";
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestword.length) {
      longestword = words[i];
    }
  }
  return longestword;
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers) {
  if (numbers == [] || numbers == "" || numbers == null) {
    return 0;
  }
  let sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
const mixedArr = [
  63,
  122,
  "audi",
  61,
  true,
  "volvo",
  "20",
  "lamborghini",
  38,
  156,
];
function add(mixedArr) {
  if (mixedArr == [] || mixedArr == "" || mixedArr == null) return 0;
  let sum = 0;
  for (var i = 0; i < mixedArr.length; i++) {
    sum += mixedArr[i];
  }

  return sum;
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersAvg) {
  if (numbersAvg == [] || numbersAvg == "" || numbersAvg == null) return null;
  let result = 0;
  let sum = 0;
  for (var i = 0; i < numbersAvg.length; i++) {
    result += numbersAvg[i];
    sum = result / numbersAvg.length;
  }
  return sum;
}

// Progression 4.2: Array of strings
const items = [
  "bread",
  "jam",
  "milk",
  "egg",
  "flour",
  "oil",
  "rice",
  "coffee powder",
  "sugar",
  "salt",
];
function averageWordLength(items) {
  if (items == [] || items == "" || items == null) {
    return null;
  }
  const total = items.reduce(function (sum, item) {
    return sum + item.length;
  }, 0);
  const avg = total / items.length;
  return avg;
}
// Progression #5: Unique arrays
const wordsUnique = [
  "bread",
  "jam",
  "milk",
  "egg",
  "flour",
  "oil",
  "rice",
  "coffee powder",
  "sugar",
  "salt",
  "egg",
  "flour",
];

function uniqueArray(wordsUnique) {
  if (wordsUnique == [] || wordsUnique == "" || wordsUnique == null) {
    return null;
  }
    


}

// Progression #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];
function searchElement(wordsFind, words) {
  if (wordsFind == [] || wordsFind == "" || wordsFind == null) {
    return null;
  }
  for (var i = 0; i < wordsFind.length; i++) {
    if (wordsFind[i] == words) return true;
    else return false;
  }
}
// Progression #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimesElementRepeated(wordsCount) {
  if (wordsCount == [] || wordsCount == "" || wordsCount == null) {
    return 0;
  }
  var count={};
    wordsCount.forEach(function(wordsCount){
      count[wordsCount]=(count[wordsCount]||0)+1;
    });
  return count;
}
// Progression #8: Bonus
function maximumProduct(matrix){
  var max=0;
  var result;
  for(var i=0; i<10; i++){
    for(var j=0; j<10; j++){
      if((j-3)>=0){
        result = matrix[i][j]*matrix[i][j-1]*matrix[i][j-2]*matrix[i][j-3];
        if(max<result)
        max=result;
      }
      if((i-3)>=0){
        result=matrix[i][j]*matrix[i-1][j]*matrix[i-2][j]*matrix[i-3][j];
        if(max<result)
        max=result;
      }
      if((i-3)>=0 && (j-1)<=0)
      result=matrix[i][j]*matrix[i-1][j+1]*matrix[i-2][j+2]*matrix[i-3][j+3];
      if(max<result)
        max=result;
    }
  }
  return max;
}
const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45],
];
