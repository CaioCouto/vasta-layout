export default function showFooterMenus() {
    const footerMenuBtn = document.querySelector('.footer-generalMenu-button')
    footerMenuBtn.addEventListener('click', () => {
        document.querySelector('.footer-generalMenu-list').classList.toggle('show')
    })
    
    const footerAboutBtn = document.querySelector('.footer-about-button')
    footerAboutBtn.addEventListener('click', () => {
        document.querySelector('.footer-about-list').classList.toggle('show')
    })
}