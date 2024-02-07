//===========================
// toggle Theme (Dark/light)
//===========================
const toggleThemeBtns = document.querySelectorAll("#toggle-theme");
toggleThemeBtns.forEach((toggleThemeBtn) => {
  toggleThemeBtn.addEventListener("click", () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});

//===========================
// Product cart scroll
//===========================
const cartAllProducts = document.querySelector("#cart-all-products");
const cartAllProductsHeight = parseInt(
  getComputedStyle(cartAllProducts).height
);

const firstProductHeight = parseInt(
  getComputedStyle(cartAllProducts.children[0]).height
);
cartAllProducts.style.maxHeight = 1.5 * firstProductHeight + "px";

if (cartAllProductsHeight > 1.5 * firstProductHeight) {
  cartAllProducts.classList.add("overflow-y-scroll");
} else {
  cartAllProducts.classList.remove("overflow-y-scroll");
}

console.log(cartAllProducts);

//===========================
// open/close mobile menu
//===========================
const xBtn = document.querySelector("#x--mark");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const mobileMenu = document.querySelector("#mobile-menu");
const overlay = document.querySelector("#overlay");

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  mobileMenu.classList.toggle("mobileMenuIsOpen");
});

xBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  mobileMenu.classList.toggle("mobileMenuIsOpen");
});
overlay.addEventListener("click", () => {
  if (mobileMenu.classList.contains("mobileMenuIsOpen")) {
    mobileMenu.classList.toggle("mobileMenuIsOpen");
    mobileMenu.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  }
});

//===========================
// open/close store submenu in mobile menu
//===========================
const storeBtn = document.querySelector("#store-btn");
const mobileSubmenuStore = document.querySelector("#mobile-submenu-store");

console.log();

storeBtn.addEventListener("click", () => {
  toggleColor(storeBtn);
  toggleColor(storeBtn.previousElementSibling);
  mobileSubmenuStore.classList.toggle("hidden");
  storeBtn.classList.toggle("storeBtnRotate");
});

function toggleColor(elem) {
  elem.classList.toggle("text-zinc-700");
  elem.classList.toggle("dark:text-white");
  elem.classList.toggle("text-orange-300");
}

//===========================
// open/close mobile cart
//===========================
const mobilexBtn = document.querySelector("#mobile-x--mark");
const cartBtn = document.querySelector("#mobile-cart-logo");
const mobileCartMenu = document.querySelector("#mobile-Cart-menu");
// const overlay  (preselected in open/close mobile menu)

cartBtn.addEventListener("click", () => {
  mobileCartMenu.classList.toggle("hidden");
  mobileCartMenu.classList.toggle("mobileCartIsOpen");
  overlay.classList.toggle("hidden");
});
mobilexBtn.addEventListener("click", () => {
  mobileCartMenu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  mobileCartMenu.classList.toggle("mobileCartIsOpen");
});
overlay.addEventListener("click", () => {
  if (mobileCartMenu.classList.contains("mobileCartIsOpen")) {
    mobileCartMenu.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
    mobileCartMenu.classList.toggle("mobileCartIsOpen");
  }
});

//===========================
//swiper
//===========================
const swiper = new Swiper(".swiper", {
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  },
  loop: true,
  grabCursor: true,

  // default breakpoints
  slidesPerView: 2,
  spaceBetween: 5,
  breakpoints: {
    // screen >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 14,
    },
    // screen >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // screen >= 640px
    768: {
      slidesPerView: 3,
      spaceBetween: 14,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 14,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1536: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
//===========================
//
//===========================
