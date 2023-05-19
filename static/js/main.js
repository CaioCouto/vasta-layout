import { loadPortfolioImages } from "./utils/loadData/index.js"
import testimonyCarouselController from "./utils/testimonyCarouselController.js"
import { showHeaderMenu, showSecondAboutSection, showMoreProjects, showFooterMenus } from './utils/mobile/index.js'

if (window.innerWidth < 900) {
    showHeaderMenu()
    showSecondAboutSection()
    showMoreProjects()
    showFooterMenus()
}


window.onload = () => {
    loadPortfolioImages()
    testimonyCarouselController()
}