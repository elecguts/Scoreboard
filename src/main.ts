import './style.css'

function displayMatches() {
  console.log("Some button with the class 'add' was clicked")
}
const addButton = document.querySelector('section.team1 .add')
addButton?.addEventListener('click', displayMatches)

const addButton2 = document.querySelector('section.team2 .add')
addButton2?.addEventListener('click', displayMatches)
