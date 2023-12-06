import './style.css'

const teamOneScoreContents = document.querySelector('section.team1 h3')
let teamOneScore = 0
const teamTwoScoreContents = document.querySelector('section.team2 h3')
let teamTwoScore = 0

const addButton = document.querySelector('section.team1 .add')
const addButton2 = document.querySelector('section.team2 .add')
const minusButton = document.querySelector('section.team1 .subtract')
const minusButton2 = document.querySelector('section.team2 .subtract')

function clickOnTeamOnePlusButton() {
  if (teamOneScore === 21) {
    return
  }
  teamOneScore = teamOneScore + 1
  if (teamOneScoreContents) {
    teamOneScoreContents.textContent = `${teamOneScore}`
  }
}
function clickOnTeamTwoPlusButton() {
  if (teamTwoScore === 21) {
    return
  }
  teamTwoScore = teamTwoScore + 1
  if (teamTwoScoreContents) {
    teamTwoScoreContents.textContent = `${teamTwoScore}`
  }
}
function clickOnTeamOneMinusButton() {
  if (teamOneScore === 0) {
    return
  }
  teamOneScore = teamOneScore - 1
  if (teamOneScoreContents) {
    teamOneScoreContents.textContent = `${teamOneScore}`
  }
}
function clickOnTeamTwoMinusButton() {
  if (teamTwoScore === 0) {
    return
  }
  teamTwoScore = teamTwoScore - 1
  if (teamTwoScoreContents) {
    teamTwoScoreContents.textContent = `${teamTwoScore}`
  }
}

addButton?.addEventListener('click', clickOnTeamOnePlusButton)
addButton2?.addEventListener('click', clickOnTeamTwoPlusButton)
minusButton?.addEventListener('click', clickOnTeamOneMinusButton)
minusButton2?.addEventListener('click', clickOnTeamTwoMinusButton)
