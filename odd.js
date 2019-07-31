function isOdd(num) {
  if (num % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

console.log("3 is odd: " + isOdd(3));
console.log("4 is odd: " + isOdd(4));