function multiply(x, y) {
  return x * y;
}
console.log(multiply(6, 8));

function capString(sentence) {
  return sentence[0].toUpperCase() + sentence.slice(1).toLowerCase();
}
console.log(capString("POLARIA is A GIRL"));

function lastLetter(string) {
  return string.slice(-1);
}
console.log(lastLetter("POLARIA is A GIRL with blond hair"));

let answer = parseInt(prompt("please enter your desired number"));
for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
