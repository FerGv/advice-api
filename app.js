const btnAdvice = document.querySelector('#btn-advice')
const adviceParagraph = document.querySelector('#advice')
let adviceId = null


async function getAdvice() {
  btnAdvice.disabled = true
  adviceParagraph.classList.add('hide')
  adviceParagraph.textContent = ''
  let newAdvice

  do {
    const res = await fetch('https://api.adviceslip.com/advice')
    const json = await res.json()
    newAdvice = json.slip
  } while(newAdvice.id === adviceId)

  adviceParagraph.textContent = newAdvice.advice
  adviceParagraph.classList.remove('hide')
  adviceId = newAdvice.id
  btnAdvice.disabled = false
}

btnAdvice.addEventListener('click', getAdvice)
