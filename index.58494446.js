!function(){var e={openModalBtn:document.querySelector("[js-data-modal-open]"),closeModalBtn:document.querySelector("[js-data-modal-close]"),modal:document.querySelector("[js-data-modal]")};function n(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",n),e.closeModalBtn.addEventListener("click",n)}();var formSend=document.querySelector("[js-send-form]"),btnSend=document.querySelector("[js-send-btn]"),asideBlock=document.querySelector("[aside]"),contactBlock=document.querySelector("[contact]"),modal=document.querySelector("[js-data-modal]");function sendPost(e){return e.preventDefault(),"BUTTON"===e.target.tagName&&"Send"===btnSend.innerText?(asideBlock.style.display="block",contactBlock.style.display="none",void(btnSend.innerText="Continue")):"BUTTON"===e.target.tagName&&"Continue"===btnSend.innerText?(asideBlock.style.display="none",contactBlock.style.display="block",btnSend.innerText="Send",void modal.classList.add("is-hidden")):void 0}formSend.addEventListener("click",(function(e){return sendPost(e)}));
//# sourceMappingURL=index.58494446.js.map
