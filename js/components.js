

// ERROR //

function displayError(message = "Ops! Something went wrong.") {
  return `<div class="error">${message}</div>`;
};

const searchfield = document.querySelector(".search-icon");
const searchbar = document.querySelector(".header-search");
const searchDesktop = document.querySelector(".search-bar");

searchfield.onclick = () => {
  searchbar.classList.toggle("header-show");
}

const shopIcon = document.querySelector(".shoppingcart-icon");
const shopDropdown = document.querySelector(".dropdown-background");
const shopItems = document.querySelector(".shop");
const paraCart = document.querySelector(".items-in-cart");

function showCart() {
  shopDropdown.classList.toggle("show-cart");
}

shopIcon.addEventListener("click", showCart)

// window.onclick = function (event) {
//   if (event.target == shopDropdown) {
//     shopDropdown.classList.toggle("show-cart");
//   }
// };

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
                              <p class="price" id="price"><span class="valuta">NOK</span> 299<span>,-</span></p>
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