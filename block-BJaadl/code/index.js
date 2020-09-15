let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

function findLongestWord(arr) {
	return arr.reduce((a, b) => {
		return a.length >= b.length ? a : b;
	});
}

findLongestWord(words);


// - Convert the above array "words" into an array of length of word instead of word.

console.log(words.map((e) => e.length));


// - Create a new array that only contains word with atleast one vowel.

console.log(
	words.filter(
		(e) =>
			e.includes("a") ||
			e.includes("e") ||
			e.includes("i") ||
			e.includes("o") ||
			e.includes("u")
	)
);

// - Find the index of the word "rhythm"

words.indexOf("rhythm");

// - Create a new array that contians words not starting with vowel.

console.log(
	words.filter(
		(e) =>
			!(
				e.startsWith("a") ||
				e.startsWith("e") ||
				e.startsWith("i") ||
				e.startsWith("o") ||
				e.startsWith("u")
			)
	)
);

// - Create a new array that contianse words not ending with vowel

console.log(
	words.filter(
		(e) =>
			!(
				e.endsWith("a") ||
				e.endsWith("e") ||
				e.endsWith("i") ||
				e.endsWith("o") ||
				e.endsWith("u")
			)
	)
);

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers


function sumArray(arr) {
	return arr.reduce((a, b) => (a += b));
}

sumArray(numbers);


// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]


numbers.map((e) => e * 3);


// - Create a new array that contains only even numbers

numbers.filter((e) => e % 2 === 0);

// - Create  a new array that contains only odd numbers.

numbers.filter((e) => e % 2 !== 0)

// - Create a new array that should have true for even number and false for odd numbers.

numbers.map((e) => (e % 2 == 0 ? true : false));

// - Sort the above number in assending order.

numbers.sort((a, b) => a - b);

// - Does sort mutate the original array?

// yes

// - Find the sum of the numbers in the array.


function sumArray(arr) {
	return arr.reduce((a, b) => (a += b));
}


//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

function averageNumbers(arr) {
	return arr.reduce((a, b) => (a += b)) / arr.length;
}




let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.


function averageWordLength(arr) {
	return arr.map((e) => e.length).reduce((a, c) => (a += c)) / arr.length;
}