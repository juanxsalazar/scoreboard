// variables
let counterone = 0
let countertwo = 0
let team1Name = 'Team 1'
let team2Name = 'Team 2'

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

// Increase score numbers and win
const increaseCounterOne = () => {
  if (counterone >=21) {
    document.querySelector('.winner').textContent = team1Name+' Wins!!!'
  return
  }    

   
  console.log('button clicked')
  counterone = counterone + 1
  console.log(counterone)
  document.querySelector('.onescore').textContent = counterone
}

const increaseCounterTwo = () => {
  if (countertwo >= 21) {
    document.querySelector('.winner').textContent = team2Name+' Wins!!!'
    return
  }
  console.log('button clicked')
  countertwo = countertwo + 1
  console.log(countertwo)
  document.querySelector('.twoscore').textContent = countertwo
}
// Decrease score Numbers
const decreaseCounterOne = () => {
  if (counterone <= 0) {
    return
  }
  if (counterone >= 21) {
    return
  }
  console.log('button clicked')
  counterone = counterone-1
  document.querySelector('.onescore').textContent = counterone
}

const decreaseCounterTwo = () => {
  if (countertwo <= 0) {
    return
  }
  if (countertwo >= 21) {
    return
  }
  console.log('button clicked')
  countertwo = countertwo-1
  document.querySelector('.twoscore').textContent = countertwo
}
// reset counter 
const resetCounter = () => {
  if (counterone = 21) {
    document.querySelector('.winner').textContent =''
  }
  if (countertwo = 21) {
    document.querySelector('.winner').textContent =''
  }
  counterone = 0
  countertwo = 0
  document.querySelector('.onescore').textContent = counterone
  document.querySelector('.twoscore').textContent = countertwo  
}
  
// Event listener
document.addEventListener('DOMContentLoaded', main)

// team name change
document
	.querySelector('.update-team-1-name')
	.addEventListener('click', updateName1)

  document
	.querySelector('.update-team-2-name')
	.addEventListener('click', updateName2)

// team 1 add and subtract button
document
  .querySelector('.first-add-one-button')
  .addEventListener('click', increaseCounterOne)

document
.querySelector('.first-minus-one-button')
.addEventListener('click', decreaseCounterOne)

// team 2 add and subtract button
document
  .querySelector('.sec-add-one-button')
  .addEventListener('click', increaseCounterTwo)

document
.querySelector('.sec-minus-one-button')
.addEventListener('click', decreaseCounterTwo)

// reset score
document
.querySelector('.reset-button')
.addEventListener('click', resetCounter)
