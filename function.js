function sum(a, b) {
  return a + b;
}

function capitalize(str) {
  const s = str.split("");
  console.log(s[0]);
  s[0] = s[0].toUpperCase();
  return s.join("");
}

function reverseString(str) {
  const s = str.split("");
  const p = [];
  for (let i = 0; i < s.length; i++) {
    const lastElement = s[s.length - 1 - i];
    p.push(lastElement);
  }
  return p.join("");
}

const calculator = (() => {
  const add = (a, b) => {
    return a + b;
  };

  const subtract = (a, b) => {
    return a - b;
  };

  const multiply = (a, b) => {
    return a * b;
  };

  const divide = (a, b) => {
    return Number((a / b).toFixed(2));
  };

  return { add, subtract, multiply, divide };
})();

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const cipher = "bcdefghijklmnopqrstuvwxyza";

function caesarCipher(str) {
  const s = str.split("");
  const cipherCode = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      let lowerCased = s[i].toLowerCase();
      const index = alphabet.indexOf(lowerCased);
      cipherCode.push(cipher[index]);
    } else {
      const index = alphabet.indexOf(s[i]);
      cipherCode.push(cipher[index]);
    }
  }
  return cipherCode.join("");
}

const analyzeArray = (arr) => {
  const total = arr.reduce((prev, next) => {
    return prev + next;
  }, 0);

  const max = Math.max(...arr);
  const min = Math.min(...arr);

  const length = arr.length;

  const average = total / length;

  console.log(average, min, max, length);

  return {
    average,
    min,
    max,
    length,
  };
};

export {
  capitalize,
  sum,
  reverseString,
  caesarCipher,
  analyzeArray,
  calculator,
};
