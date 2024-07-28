

let num = prompt("Enter a number between 0 and 1 million:");
num = parseInt(num);

if (isNaN(num) || num < 0 || num > 1000000) {
  alert ("Invalid number");
} else {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  alert(`Sum of numbers up to ${num} is ${sum}`);
}

