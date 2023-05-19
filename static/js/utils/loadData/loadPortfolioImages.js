function generateImgTag(img) {
    const tag = document.createElement('img');
    tag.classList.add('main-portfolio-image')
    if(img.isMobile) { tag.classList.add('main-portfolio-imageMobile') }
    tag.src = `assets/${img.src}`
    tag.alt = img.alt
    return tag
}

export default function loadPortfolioImages() {
    const article = document.querySelector('.main-portfolio-article')
    const images = [
        {
            src:"portfolio-imagem-1.jpg",
            alt:"Prédios espelhados observados de baixo para cima."
        },
        {
            src:"portfolio-imagem-2.jpg",
            alt:"Cidade com muitos prédios sendo vista de cima."
        },
        {
            src:"portfolio-imagem-3.jpg",
            alt:"Cidade com muitos prédios sendo vista de lado, mas da altura dos prédio."
        },
        {
            src:"portfolio-imagem-4.jpg",
            alt:"Cruzamento de uma cidade com arquitetura clássica, com uma prédio moderno ao fundo."
        },
        {
            src:"portfolio-imagem-5.jpg",
            alt:"Últimos andares de um prédio cinza e vermelho."
        },
        {
            src:"portfolio-imagem-6.jpg",
            alt:"Prédios observados de baixo para cima."
        },
    ]

    images.forEach((img, index) => {
        img.isMobile = index >= images.length-2
        article.appendChild(generateImgTag(img))
    })
}