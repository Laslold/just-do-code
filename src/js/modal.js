(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[js-data-modal-open]"),
    closeModalBtn: document.querySelector("[js-data-modal-close]"),
    modal: document.querySelector("[js-data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();



const formSend = document.querySelector('[js-send-form]'); 
const btnSend = document.querySelector('[js-send-btn]');
const asideBlock = document.querySelector('[aside]');
const contactBlock = document.querySelector('[contact]');

const modal = document.querySelector('[js-data-modal]')

formSend.addEventListener('click', (e)=>sendPost(e));
function sendPost (e){
  e.preventDefault() 
  if(e.target.tagName==='BUTTON' && btnSend.innerText==='Send'){
    asideBlock.style.display = 'block';
    contactBlock.style.display = 'none';
    btnSend.innerText='Continue';
    return;
  }
  if(e.target.tagName==='BUTTON' && btnSend.innerText==='Continue'){
    asideBlock.style.display = 'none';
    contactBlock.style.display = 'block';
    btnSend.innerText='Send';
    modal.classList.add("is-hidden")
    return;
  }
}
