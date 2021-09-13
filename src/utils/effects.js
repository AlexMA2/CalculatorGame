export const disappear = (element) => {
  element.style.display = 'none'
}

export const appear = (element, display) => {
  element.style.display = display
}

export const rotate = (element, deg) => {
  element.style.transform = `rotate(${deg}deg)`
}
