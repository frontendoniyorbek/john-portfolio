const nav = document.querySelector('nav')
const toggleBtn = document.querySelector('.toggele-btn')
// const toggleBtnImg = document.querySelector('.toggele-btn img')

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('hidden')
})