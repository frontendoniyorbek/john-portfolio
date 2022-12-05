const nav = document.querySelector('nav')
const toggleBtn = document.querySelector('.toggele-btn')
const toggleBtnImg = document.querySelector('.toggele-btn img')

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('hidden')

    if (nav.classList.contains('hidden')) {
        toggleBtnImg.src = '../images/svg/hamburger-icon.svg'
    } else {
        toggleBtnImg.src = '../images/svg/close-icon.svg'
    }
})