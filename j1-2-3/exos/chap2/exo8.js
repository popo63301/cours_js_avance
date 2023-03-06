const sentence = "Bonjour tout le monde, vous aimez JS ?";

//question 1

// let res = sentence.split("").reverse().join("");

// console.log(res);

// question 2

// let res = sentence
//   .split("")
//   .filter((e) => e !== "," && e !== "?")
//   .join("")
//   .trim()
//   .split(" ")
//   .map((e) => [e, e.length]);

// console.log(res);

// question 3

function countLettersForWords(phrase) {
  return phrase
    .split("")
    .filter((e) => e !== "," && e !== "?")
    .join("")
    .trim()
    .split(" ")
    .map((e) => [e, e.length]);
}

console.log(countLettersForWords(sentence));
console.log(countLettersForWords("Vive le JS et la 3WA"));
