import { $, $$ } from './utils/dom'
import './controls'
import './arrow'

let counterStart = 1
let time = 1
let numQuestion = 1

const questions = []
const correctAnswers = []
const answers = []
const resultsOfAnswers = []

let startingGame
let gameTime
const operators = ['+', '-', 'x', '÷']

/*
  Crea una pregunta aleatoria con operaciones aritmeticas
*/
const createQuestion = () => {
  const operRandom = Math.floor(Math.random() * 4)
  const operator = operators[operRandom]
  let num1 = 0
  let num2 = 0
  let result = 0

  switch (operRandom) {
    case 0:
      num1 = Math.floor(Math.random() * 199 + 1)
      num2 = Math.floor(Math.random() * 199 + 1)
      result = num1 + num2
      break
    case 1:
      num2 = Math.floor(Math.random() * 199 + 1)
      result = Math.floor(Math.random() * 199 + 1)
      num1 = num2 + result
      break
    case 2:
      num1 = Math.floor(Math.random() * 29 + 1)
      num2 = Math.floor(Math.random() * 29 + 1)
      result = num1 * num2
      break
    case 3:
      num2 = Math.floor(Math.random() * 18 + 2)
      num1 = num2 * Math.floor(Math.random() * 18 + 2)
      result = num1 / num2
      break
  }

  const ques = num1.toString() + ' ' + operator.toString() + ' ' + num2.toString() + ' = '

  return [ques, result]
}

/*
  Rellena el array de preguntas con 999 preguntas
*/
const fillArrayQuestions = () => {
  for (let i = 0; i < 999; i++) {
    const ques = createQuestion()
    questions.push(ques[0])
    correctAnswers.push(ques[1])
  }

  startingGame = setInterval(decreasing, 1000)
}

/*
  Decrementa el tiempo para empezar el juego
*/
const decreasing = () => {
  if (counterStart > 1) {
    counterStart -= 1
    $('.counter-start p').innerText = counterStart
  } else {
    clearInterval(startingGame)
    $('.start').classList.remove('active')
    $('.calculator-game').classList.add('active')
    $('.question-number').innerText = '#' + numQuestion
    $('#problem').innerText = questions[numQuestion - 1]
    $('.counter-time').innerText = time
    gameTime = setInterval(decreasingTimeGame, 1000)
  }
}

/*
  Decrementa el tiempo del juego
*/

const decreasingTimeGame = () => {
  if (time > 0) {
    time -= 1
    $('.counter-time').innerText = time
  } else if (time === 0) {
    time -= 10
    clearInterval(gameTime)
    $('.calculator-game').classList.remove('active')
    $('.results').classList.add('active')
    finishGame()
  }
}

/*
  Envia la respuesta al array de respuestas
*/

const sendAnswer = (ans) => {
  const ansNumber = parseInt(ans)
  if (!isNaN(ansNumber)) {
    answers.push(ansNumber)
    numQuestion += 1
    $('.question-number').innerText = '#' + numQuestion
    $('#problem').innerText = questions[numQuestion - 1]
    $('#response').innerText = ''
  } else {
    window.alert('Something went wrong. Sorry ')
    window.location.reload()
  }
}

/*
  Escucha el evento click del boton de Enter
*/

$('#btn-enter').addEventListener('click', function () {
  if ($('#response').innerText.length !== 0) {
    sendAnswer($('#response').innerText)
  }
})

$('body').addEventListener('keydown', function (ev) {
  ev.preventDefault()
  if (!isNaN(ev.key)) {
    if ($('#response').innerText.length < 4) {
      $('#response').innerText = $('#response').innerText + ev.key
    }
  } else if (ev.key === 'Enter') {
    if ($('#response').innerText.length !== 0) {
      sendAnswer($('#response').innerText)
    }
  } else if (ev.key === 'Backspace' || ev.key === 'Delete') {
    const texto = $('#response').innerText
    $('#response').innerText = texto.substring(0, texto.length - 1)
  }
})

const checkAnswers = () => {
  let counterCorrects = 0
  for (let i = 0; i < numQuestion - 1; i++) {
    if (correctAnswers[i] === answers[i]) {
      counterCorrects = counterCorrects + 1
      resultsOfAnswers[i] = 1
    } else {
      resultsOfAnswers[i] = 0
    }
  }

  return [counterCorrects, numQuestion - 1 - counterCorrects]
}

const finishGame = () => {
  $('#total').innerText = numQuestion - 1

  const res = checkAnswers()
  createTableDetails()
  $('#corrects').innerText = res[0]
  $('#incorrects').innerText = res[1]
  loadResults(res[0], res[1])
  $$('.paper').forEach(paper => {
    paper.style.height = '100%'
  })
}

fillArrayQuestions()

const loadResults = (ac, ai) => {
  let timer = 100

  setTimeout(() => {
    $('#first').style.height = '56px'
  }, timer)

  timer += 1000

  setTimeout(() => {
    $('#second').style.height = '56px'
  }, timer)

  timer += 1000

  setTimeout(() => {
    $('#third').style.height = '56px'
  }, timer)

  timer += 1000

  setTimeout(() => {
    $('.score').style.height = '120px'
  }, timer)

  let counter = 0

  setTimeout(() => {
    const points = calcPoints(ac, ai)
    const inte = setInterval(() => {
      if (counter < 10) {
        counter++
        $('#score-id').innerText = Math.floor(Math.random() * 20 - 10)
      } else {
        clearInterval(inte)
        $('#score-id').innerText = points
      }
    }, 100)
  }, 3800)
}

const calcPoints = (ac, ai) => {
  // Improve the calc
  return ac * 5 - ai * 0.5
}

const createRowInTable = (number, problem, yourAnswer, correctAnswer, result) => {
  let rowString = ''
  rowString += '<tr><td>' + number
  rowString += '</td><td>' + problem
  rowString += '</td><td>' + yourAnswer
  rowString += '</td><td>' + correctAnswer
  rowString += '</td><td>' + result + '</td></tr>'

  return rowString
}

const correctIcon = '<svg id="correct" height="30" viewBox="0 0 21 21" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m.5 5.5 3 3 8.028-8" fill="none" stroke="green" stroke-linecap="round" stroke-linejoin="round" transform="translate(5 6)"/></svg>'
const incorrectIcon = '<svg id="incorrect" height="30" viewBox="0 0 21 21" width="30" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="red" stroke-linecap="round" stroke-linejoin="round" transform="translate(5 5)"><path d="m10.5 10.5-10-10z"/><path d="m10.5.5-10 10"/></g></svg>'

const createTableDetails = () => {
  let tbody = ''
  for (let i = 0; i < numQuestion - 1; i++) {
    if (resultsOfAnswers[i] === 0) {
      tbody += createRowInTable(i + 1, questions[i].slice(0, -2), parseInt(answers[i]), correctAnswers[i], incorrectIcon)
    } else if (resultsOfAnswers[i] === 1) {
      tbody += createRowInTable(i + 1, questions[i].slice(0, -2), parseInt(answers[i]), correctAnswers[i], correctIcon)
    }
  }
  $('#table-details').innerHTML = $('#table-details').innerHTML + tbody
}

// const createTableRanking = async () => {
//   const res = await fetch()
//   const data = await res.json()
//   console.log(data)
// }
