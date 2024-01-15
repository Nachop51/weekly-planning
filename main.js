import { NUMBER_OF_STARS } from './constants'
import './style.css'
import { createStar, initializePlanning } from './utils'

const $planning = document.getElementById('planning')
const dialog = document.querySelector('dialog')
const dialogHeader = dialog.querySelector('h3')
const form = document.getElementById('form')
const header = document.querySelector('header')
const textArea = document.getElementById('textArea')

const planning = initializePlanning()

let selectedDay = null

function updateDay () {
  const day = selectedDay.getAttribute('data-day')
  const content = textArea.value

  planning.days[day] = content
  selectedDay.innerText = content

  window.localStorage.setItem('planning', JSON.stringify(planning))
}

for (const [day, content] of Object.entries(planning.days)) {
  const $article = document.createElement('article')

  const $day = document.createElement('h3')
  $day.innerText = day.slice(0, 3)
  $day.classList.add('day')

  const $content = document.createElement('p')
  $content.innerText = content
  $content.classList.add('content')
  $content.setAttribute('data-day', day)

  $article.appendChild($day)
  $article.appendChild($content)

  $planning.appendChild($article)

  $content.addEventListener('dblclick', () => {
    textArea.value = planning.days[day]
    dialogHeader.innerText = day
    selectedDay = $content
    dialog.showModal()
    dialog.classList.add('dialog-in')
  })
}

// Create stars
for (let i = 0; i < NUMBER_OF_STARS; i++) {
  const star = createStar(24, 24, '#F5D76E')
  star.classList.add('stars')

  if (i % 2 === 0) {
    star.style.left = `${Math.random() * 30}%`
  } else {
    star.style.left = `${70 + Math.random() * 30 - 5}%`
  }

  star.style.top = `${Math.random() * 55 + 20}%`
  star.style.animationDelay = `-${Math.random() * 4}s`

  header.appendChild(star)
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  updateDay()
  dialog.classList.remove('dialog-in')
  setTimeout(() => {
    dialog.close()
  }, 250)
})
