// Problem 1: Sleeping In
function sleepIn(weekday, vacation){
	sleep_in = false
	if (!weekday || vacation) {
		sleep_in = true
	}
	return sleep_in
}

let weekday = true
let vacation = false

console.log("Sleep in? " + sleepIn(weekday, vacation))


// Problem 2: Monkey Trouble
function inTrouble(aSmile, bSmile){
	trouble = false
	if ((aSmile && bSmile) || (!aSmile && !bSmile)){
		trouble = true
	}
	return trouble
}

let aSmile = true
let bSmile = false

console.log("Are we in trouble? " + inTrouble(aSmile, bSmile))


// Problem 3: String Times
function stringTimes(str, n){
	newStr = ""
	for(i = 0; i < n; i++){
		newStr += str
	}
	return newStr
}

let str = "Hi"
let n = 1

console.log("New String " + stringTimes(str, n))


// Problem 4: Lucky Sum
function luckySum(a, b, c){
	let nums = [a, b, c]
	let l = nums.length
	for(i = 0, sum = 0; i < l; i++){
		if (nums[i] == 13){
			break
		}
		sum += nums[i]
	}
	return sum
}

let a = 1,
b = 2,
c = 1
console.log("Lucky Sum? "+ luckySum(a, b, c))


// Problem 5: Caught Speeding
function caughtSpeeding(speed, isBirthday){
	if (isBirthday){
		speed -= 5
	}
	let isTicket = 0
	if (speed > 60 && speed <= 80){
		isTicket = 1
	}
	else if (speed > 80){
		isTicket = 2
	}
	return isTicket
}

let speed = 66
let isBirthday = true
console.log("Speeding Ticket? " + caughtSpeeding(speed, isBirthday))


// Bonus: Make Bricks
function makeBricks(small, big, goal){
	total = small + (big * 5)
	makeIt = false
	if (total >= goal){
		makeIt =  true
	}
	return makeIt
}

let small = 3,
big = 2,
goal = 10
console.log("Can we make it? " + makeBricks(small, big, goal))