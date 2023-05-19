export default function showMoreProjects() {
    const portfolioBtn = document.querySelector('#main-portfolio-button')
    portfolioBtn.addEventListener('click', () => {
        const portfolioImgs = document.querySelectorAll('.main-portfolio-imageMobile')
        portfolioImgs.forEach(img => {
            img.classList.toggle('show')
        });
    })
}