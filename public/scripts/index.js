import Modal from './modal.js';

const modal = Modal({ animateClasses: ['animate-pop', 'back'] })

const cards = document.querySelectorAll('.cards .row .card')
const deleteForm = document.querySelector('#delete-row')

for (let card of cards) {
  const cardId = card.dataset.id

  const deleteButton = card.querySelector('button.delete')
  deleteButton.onclick = () => {
    modal.open()
    deleteForm.setAttribute('action', '/row/delete/' + cardId)
  }
}

function abrir() {

  for(let card  of cards) {
    const cardId = card.dataset.id

    const deleteButton = card.querySelector('button.delete')
    modal.open()
    deleteForm.setAttribute('action', '/row/delete/' + cardId)
  
  }
  
}