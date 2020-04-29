// Problem 1: Sleeping In
function sleepInPrompt(weekday, vacation) {
  sleepIn = false;
  if (!weekday || vacation) {
    sleepIn = true;
  }
  return sleepIn;
}

const weekday = true;
const vacation = false;

console.log('Sleep in? ' + sleepInPrompt(weekday, vacation));


// Problem 2: Monkey Trouble
function inTrouble(aSmile, bSmile) {
  trouble = false;
  if ((aSmile && bSmile) || (!aSmile && !bSmile)) {
    trouble = true;
  }
  return trouble;
}

const aSmile = true;
const bSmile = false;

console.log('Are we in trouble? ' + inTrouble(aSmile, bSmile));


// Problem 3: String Times
function stringTimes(str, n) {
  newStr = '';
  for (i = 0; i < n; i++) {
    newStr += str;
  }
  return newStr;
}

const str = 'Hi';
const n = 1;

console.log('New String ' + stringTimes(str, n));


// Problem 4: Lucky Sum
function luckySum(a, b, c) {
  const nums = [a, b, c];
  const l = nums.length;
  for (i = 0, sum = 0; i < l; i++) {
    if (nums[i] == 13) {
      break;
    }
    sum += nums[i];
  }
  return sum;
}

const a = 1;
const b = 2;
const c = 1;
console.log('Lucky Sum? ' + luckySum(a, b, c));


// Problem 5: Caught Speeding
function caughtSpeeding(speed, isBirthday) {
  if (isBirthday) {
    speed -= 5;
  }
  let isTicket = 0;
  if (speed > 60 && speed <= 80) {
    isTicket = 1; }
  else if (speed > 80) {
    isTicket = 2;
  }
  return isTicket;
}

const speed = 66;
const isBirthday = true;
console.log('Speeding Ticket? ' + caughtSpeeding(speed, isBirthday));


// Bonus: Make Bricks
function makeBricks(small, big, goal) {
  const total = small + (big * 5);
  const makeIt = false;
  if (total >= goal) {
    makeIt = true;
  }
  return makeIt;
}

const small = 3;
const big = 2;
const goal = 10;
console.log('Can we make it? ' + makeBricks(small, big, goal));
