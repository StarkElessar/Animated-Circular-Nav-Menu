const showMenuBtn   = document.querySelector('.toggle'),
      navMenu       = document.querySelector('.menu')

showMenuBtn.onclick = () => {
  navMenu.classList.toggle('active')
}