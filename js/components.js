/**
 * Navbar get sticky
 * Add & remove classes if scrolled
 */
const shopIcon = document.querySelector(".shoppingcart-icon");
const logo = document.querySelector(".nav-logo-center");
const burger = document.querySelector(".hamburger-label");
const searchbar = document.querySelector(".header-search");
const backgroundMobile = document.querySelector(".background-mobile-nav");
const checkbox = document.querySelector("#hamburger-menu");
const nav = document.querySelector("nav");

function handleScroll() {
  const scrolled = window.scrollY;

  if (scrolled > 2) {
    backgroundMobile.classList.add("scrolled")
    nav.classList.add("scrolled");
    shopIcon.classList.add("shop-scroll");
    logo.classList.add("logo-scroll");
    searchbar.classList.add("mobile-scroll")
    burger.classList.add("mobile-scroll");
    searchbar.style.marginTop = "-1.6rem";

  } else {
    nav.classList.remove("scrolled");
    shopIcon.classList.remove("shop-scroll");
    logo.classList.remove("logo-scroll");
    searchbar.classList.remove("mobile-scroll")
    burger.classList.remove("mobile-scroll");
    backgroundMobile.classList.remove("scrolled")
    searchbar.style.marginTop = "0";
  }
}

window.addEventListener("scroll", handleScroll);

// ERROR //

function displayError(message = "Ops! Something went wrong.") {
  return `<div class="error">${message}</div>`;
};

const searchfield = document.querySelector(".search-icon");
const searchDesktop = document.querySelector(".search-bar");

searchfield.onclick = () => {
  searchbar.classList.toggle("header-show");
}

const shopDropdown = document.querySelector(".dropdown-background");
const shopItems = document.querySelector(".shop");
const paraCart = document.querySelector(".items-in-cart");

function showCart() {
  shopDropdown.classList.toggle("show-cart");
}

shopIcon.addEventListener("click", showCart)


function cart() {
  let apiUrl = "https://grafs.no/wp-json/wc/v3/products?consumer_key=ck_842a940736a6103fd78f750256ff5ede2b209c25&consumer_secret=cs_091f907c9c293cf0810e8dc61f528d489f9eeb05";

  async function callApi() {
    const response = await fetch(apiUrl);
    const result = await response.json();
    let count = 0;
    let newHtml = "";

    for (let i = 0; i < result.length; i++) {
      count++
      let game = result[i];

      newHtml = `<section class="cart-item-container" id="in-cart">
                              <div class="gameinfo" id="gameinfo-cart">
                              <figure>
                              <a href="details.html?id=${game.id}">
                              <img src="${game.images[0].src}" alt="Picture of the ${game.name} cover" class="img-cart"/>
                              </a>
                              </figure>
                              <h3><a href="details.html?id=${game.id}" class="gamelink">${game.name}</a></h3>

                              <figure>
                              <img src="/images/icons/trash.svg" alt="Remove game" class="trash" value="${game.id}" />
                              </figure>
                              </div>
                              </section>`

      paraCart.insertAdjacentHTML("afterend", newHtml)

      if (count === 2) {
        break;
      }
    }

    let trashImg = document.querySelectorAll(".trash");
    const trashCart = Array.from(trashImg);

    trashCart.forEach(item => {

      item.addEventListener("click", (e) => {
        let IDvalue = e.target.attributes[3].value;

        result.filter(game => {

          if (game.id == IDvalue) {
            e.target.parentElement.parentElement.parentElement.remove();
          }
        })
      })
      item.addEventListener("click", checkCart)
    });
  }

  function checkCart() {
    let cartNav = shopItems.children;
    const arrCart = Object.entries(cartNav);
    let firstItemInCartNav = arrCart[1];

    if (!firstItemInCartNav[1].classList.contains("cart-item-container")) {
      paraCart.innerText = "Your cart is empty"
    }
  };

  callApi()
}

cart();


function removeCart(e) {
  if (e.target == shopDropdown) {
    shopDropdown.classList.toggle("show-cart");
  }
}

window.addEventListener("click", removeCart)