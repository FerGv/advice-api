const btnAdvice = document.querySelector('#btn-advice');
const adviceParagraph = document.querySelector('#advice');
const API_URL = 'https://api.adviceslip.com/advice';
let adviceId = null;

/**
 * Get an advice from API.
 */
async function getAdvice() {
  btnAdvice.disabled = true;
  btnAdvice.textContent = 'Thinking...';
  adviceParagraph.classList.add('hide');
  adviceParagraph.textContent = '';
  let newAdvice = null;

  do {
    const res = await fetch(API_URL);
    const json = await res.json();
    newAdvice = json.slip;
  } while (newAdvice.id === adviceId);

  adviceParagraph.textContent = newAdvice.advice;
  adviceParagraph.classList.remove('hide');
  adviceId = newAdvice.id;
  btnAdvice.disabled = false;
  btnAdvice.textContent = 'Give me advice';
}

btnAdvice.addEventListener('click', getAdvice);
