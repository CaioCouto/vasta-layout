import { loadPortfolioImages } from "./utils/loadData/index.js"
import testimonyCarouselController from "./utils/testimonyCarouselController.js"
import { showHeaderMenu, showSecondAboutSection, showMoreProjects, showFooterMenus } from './utils/mobile/index.js'

if (window.innerWidth < 900) {
    showHeaderMenu()
    showSecondAboutSection()
}

if (window.innerWidth < 1200) {
    showMoreProjects()
    showFooterMenus()
}


window.onload = () => {
    loadPortfolioImages()
    testimonyCarouselController()
}