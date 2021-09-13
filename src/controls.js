import { $ } from './utils/dom'

const buttons = ['#btn-0', '#btn-1', '#btn-2', '#btn-3', '#btn-4', '#btn-5', '#btn-6', '#btn-7', '#btn-8', '#btn-9']

const setNumber = (number) => {
  if ($('#response').innerText.length < 4) {
    $('#response').innerText += number
  }
}

buttons.forEach((btn, index) => {
  $(btn).addEventListener('click', ev => {
    ev.preventDefault()
    ev.stopPropagation()
    setNumber(index)
  })
})

$('#btn-erase').addEventListener('click', function (ev) {
  ev.preventDefault()
  const texto = $('#response').innerText
  $('#response').innerText = texto.substring(0, texto.length - 1)
})

$('.start-again').addEventListener('click', function () {
  window.location.reload()
})

$('.return').addEventListener('click', function () {
  window.location.assign('index.html')
})
