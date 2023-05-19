function filterTrackParentCSSDisplay(el) {
    return window.getComputedStyle(el.parentElement).display !== 'none'
}

function setSlidesSideBySide(slides) {
    const slidewidth = slides[0].getBoundingClientRect().width;
    slides.forEach((slide, index) => { slide.style.left = `${slidewidth*index}px` })
}

function navigate(track, currentSlide, targetSlide) {
    track.style.transform = `translateX(-${targetSlide.style.left})`
    currentSlide.classList.remove('current-slide')
    targetSlide.classList.add('current-slide')
}

export default function testimonyCarouselController() {
    const [ track ] = Array.from(document.querySelectorAll('.carousel-track')).filter(filterTrackParentCSSDisplay)
    const slides = Array.from(track.querySelectorAll('.carousel-slide'))
    const leftButton = document.querySelector('.testimony-button-left')
    const rightButton = document.querySelector('.testimony-button-right')

    setSlidesSideBySide(slides)

    leftButton.addEventListener('click', (e) => {
        const currentSlide = track.querySelector('.current-slide')
        const nextSlide = currentSlide.previousElementSibling
        if(nextSlide) { navigate(track, currentSlide, nextSlide) }
    })

    rightButton.addEventListener('click', (e) => {
        const currentSlide = track.querySelector('.current-slide')
        const nextSlide = currentSlide.nextElementSibling
        if(nextSlide) { navigate(track, currentSlide, nextSlide) }
    })
}