import './style.css'

const teamOneScoreContents = document.querySelector('section.team1 h3')
let teamOneScore = 0
const teamTwoScoreContents = document.querySelector('section.team2 h3')
let teamTwoScore = 0

const addButton = document.querySelector('section.team1 .add')
const addButton2 = document.querySelector('section.team2 .add')
const minusButton = document.querySelector('section.team1 .subtract')
const minusButton2 = document.querySelector('section.team2 .subtract')

const teamOneNameInput = document.querySelector('section.team1 input')
const teamTwoNameInput = document.querySelector('section.team2 input')
const teamOneNameText = document.querySelector('section.team1 h2')
const teamTwoNameText = document.querySelector('section.team2 h2')

const resetButton = document.querySelector('h1 button')

function clickOnResetButton() {
  teamOneScore = 0
  if (teamOneScoreContents) {
    teamOneScoreContents.textContent = `${teamOneScore}`
  }
  teamTwoScore = 0
  if (teamTwoScoreContents) {
    teamTwoScoreContents.textContent = `${teamTwoScore}`
  }
  if (teamOneNameText) {
    teamOneNameText.textContent = 'Team 1'
  }
  if (teamOneNameInput instanceof HTMLInputElement) {
    teamOneNameInput.value = ''
  }
  if (teamTwoNameText) {
    teamTwoNameText.textContent = 'Team 2'
  }
  if (teamTwoNameInput instanceof HTMLInputElement) {
    teamTwoNameInput.value = ''
  }
}
function clickOnTeamOnePlusButton() {
  if (teamOneScore === 21) {
    return
  }
  teamOneScore = teamOneScore + 1
  if (teamOneScoreContents) {
    teamOneScoreContents.textContent = `${teamOneScore}`
  }
  if (teamOneScore === 21) {
    setTimeout(function () {
      window.alert(`${teamOneNameText?.textContent} wins!`)
    }, 500)
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
  if (teamTwoScore === 21) {
    setTimeout(function () {
      window.alert(`${teamTwoNameText?.textContent} wins!`)
    }, 500)
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
function teamOneInputChanged(event: Event) {
  const inputThatWasChanged = event.target

  if (inputThatWasChanged instanceof HTMLInputElement) {
    const textThatWasInput = inputThatWasChanged.value

    if (teamOneNameText) {
      teamOneNameText.textContent = textThatWasInput
    }
  }
}
function teamTwoInputChanged(event: Event) {
  const inputThatWasChanged = event.target

  if (inputThatWasChanged instanceof HTMLInputElement) {
    const textThatWasInput = inputThatWasChanged.value

    if (teamTwoNameText) {
      teamTwoNameText.textContent = textThatWasInput
    }
  }
}

addButton?.addEventListener('click', clickOnTeamOnePlusButton)
addButton2?.addEventListener('click', clickOnTeamTwoPlusButton)
minusButton?.addEventListener('click', clickOnTeamOneMinusButton)
minusButton2?.addEventListener('click', clickOnTeamTwoMinusButton)
teamOneNameInput?.addEventListener('input', teamOneInputChanged)
teamTwoNameInput?.addEventListener('input', teamTwoInputChanged)
resetButton?.addEventListener('click', clickOnResetButton)
