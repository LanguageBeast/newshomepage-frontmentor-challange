const frontImgElement = document.getElementById("front-img");
const bodyElement = document.getElementById("body-element");
const navLinksDesktopElement = document.getElementById("nav-links-desktop");
const navLinksMobileElement = document.getElementById("nav-links-mobile");
const mobileMenuElem = document.getElementById("mb-menu-open");
const mobileMenuCloseElem = document.getElementById("mb-menu-close");
const mobileLinksContainerElem = document.getElementById("mb-links-container");
const bodyMimicElement = document.getElementById("body-mimic");

let desktop = true;

function toggleMenuVisibility(element) {
  element.classList.toggle("hide");
}

function loadMobile() {
  let width = window.innerWidth;
  if (width > 1000 && !desktop) {
    frontImgElement.src = "./assets/images/image-web-3-desktop.jpg";
    toggleMenuVisibility(mobileMenuElem);
    toggleMenuVisibility(navLinksDesktopElement);
    desktop = true;
  } else if (width <= 1000 && desktop) {
    frontImgElement.src = "./assets/images/image-web-3-mobile.jpg";
    toggleMenuVisibility(mobileMenuElem);
    toggleMenuVisibility(navLinksDesktopElement);
    desktop = false;
  }
}
loadMobile();
window.addEventListener("resize", loadMobile);
mobileMenuElem.addEventListener("click", () => {
  toggleMenuVisibility(bodyMimicElement);
  toggleMenuVisibility(mobileLinksContainerElem);
});
mobileMenuCloseElem.addEventListener("click", () => {
  toggleMenuVisibility(bodyMimicElement);
  toggleMenuVisibility(mobileLinksContainerElem);
});
