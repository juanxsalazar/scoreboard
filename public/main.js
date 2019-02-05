// variables
let counterone = 0
let countertwo = 0
let team1Name
let team2Name

// main class selectors
const main = () => {
  document.querySelector('.onescore').textContent = 0
  document.querySelector('.twoscore').textContent = 0
  document.querySelector('.team1Name').textContent = 'Team 1'
  document.querySelector('.team2Name').textContent = 'Team 2'
}
// Change names
const updateName1 = () => {
	team1Name = document.querySelector('.team1new').value
	document.querySelector('.team1Name').textContent = team1Name
}

const updateName2 = () => {
	team2Name = document.querySelector('.team2new').value
	document.querySelector('.team2Name').textContent = team2Name
}

// Increase score numbers
const increaseCounterOne = () => {
  console.log('button clicked')
  counterone = counterone + 1
  console.log(counterone)
  document.querySelector('.onescore').textContent = counterone
}

const increaseCounterTwo = () => {
  console.log('button clicked')
  countertwo = countertwo + 1
  console.log(countertwo)
  document.querySelector('.twoscore').textContent = countertwo
}
// Decrease score Numbers
const decreaseCounterOne = () => {
  console.log('button clicked')
  counterone = counterone-1
  document.querySelector('.onescore').textContent = counterone
}

const decreaseCounterTwo = () => {
  console.log('button clicked')
  countertwo = countertwo-1
  document.querySelector('.twoscore').textContent = countertwo
}

// Event listener
document.addEventListener('DOMContentLoaded', main)

// team 1 name change
document
	.querySelector('.update-team-1-name')
	.addEventListener('click', updateName1)

  // team 2 name change
  document
	.querySelector('.update-team-2-name')
	.addEventListener('click', updateName2)

// team 1 add button
document
  .querySelector('.first-add-one-button')
  .addEventListener('click', increaseCounterOne)

  // team 1 minus button
document
.querySelector('.first-minus-one-button')
.addEventListener('click', decreaseCounterOne)

// team 2 add button
document
  .querySelector('.sec-add-one-button')
  .addEventListener('click', increaseCounterTwo)

  // team 2 minus button
document
.querySelector('.sec-minus-one-button')
.addEventListener('click', decreaseCounterTwo)

// team 1 change name
