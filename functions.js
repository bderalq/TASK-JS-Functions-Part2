
function greet(name) {
  // Your code here
  console.log(`Hello ${name}`);
}


function isOdd(n) {
  // Your code here
  if (n % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}


function oddsSmallerThan(n) {
  if (n % 2 == 0){
    return n/2;
  } else {
    return (n-1) / 2;
  }
}


function squareOrDouble(n) {
  // Your code here
  if (n % 2 == 0 ) {
    return n * 2;
  } else {
    return n * n;
  }
}

module.exports = {
  greet,
  isOdd,
  oddsSmallerThan,
  squareOrDouble,
};
