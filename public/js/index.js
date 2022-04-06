// Switch Mode

function changeMode() {
    changeClasses()
  }
  
  function changeClasses() {
    button.classList.toggle('light-mode')
    body.classList.toggle('light-mode')
   nav.classList.toggle('bg-light')
   a.classList.toggle('light-mode')
   btnadd.classList.toggle('bg-dark')
}

const a = document.getElementsByClassName('icons')[0]
  const nav = document.getElementsByTagName('nav')[0]
  const button = document.getElementById('mode-selector')
  const btnadd = document.getElementById('btn-add')
  const body = document.getElementsByTagName('body')[0]
  button.addEventListener('click', changeMode)