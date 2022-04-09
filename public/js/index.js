
const editModal = new bootstrap.Modal(document.getElementById("edit-modal"));
const btnEdit = document.getElementById('btn-edi');
const urgencyModal = new bootstrap.Modal(document.getElementById("urgency-modal"));
const btnUrgency = document.getElementById('btn-urgency')
btnEdit.addEventListener('click',()=>{ editModal.show();})
btnUrgency.addEventListener('click',()=>{ urgencyModal.show();})
// Switch Mode

function changeMode() {
    changeClasses()
  }
  
  function changeClasses() {
    button.classList.toggle('light-mode')
    body.classList.toggle('light-mode')
   nav.classList.toggle('light-mode')
   a.classList.toggle('light-mode')

   h1.classList.toggle('light-mode')
   toggle.classList.toggle('light-mode')
}

const a = document.getElementsByClassName('icons')[0]
  const nav = document.getElementsByTagName('nav')[0]
  const button = document.getElementById('mode-selector')
  const btnadd = document.getElementById('btn-add')
  const body = document.getElementsByTagName('body')[0]
 const h1 = document.getElementById('logo')
 const toggle = document.getElementsByClassName('navbar-toggler-icon')[0]
  button.addEventListener('click', changeMode)