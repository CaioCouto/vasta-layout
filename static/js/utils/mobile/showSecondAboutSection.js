export default function showSecondAboutSection () {
    const mainAboutButton = document.querySelector('#main-about-button')
    mainAboutButton.addEventListener('click', () => {
        const section  = document.querySelector('.main-about-second')
        const chevronDown = document.querySelector('#main-about-iconDown')
        const chevronUp = document.querySelector('#main-about-iconUp')

        section.classList.toggle('show')

        if (section.classList.contains('show')) {
            chevronDown.style.display = 'none'
            chevronUp.style.display = 'block'
            mainAboutButton.textContent = 'Leia Menos'
        }
        else {
            chevronUp.style.display = 'none'
            chevronDown.style.display = 'block'
            mainAboutButton.textContent = 'Leia Mais'
        }
    })
}