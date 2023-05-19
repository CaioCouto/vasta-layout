export default function showHeaderMenu() {
    const hamburguerBtn = document.querySelector('#header-hamburger')
    hamburguerBtn.addEventListener('click', () => {
        const menu = document.querySelector('#header-list')
        menu.classList.toggle('show')
    })
}