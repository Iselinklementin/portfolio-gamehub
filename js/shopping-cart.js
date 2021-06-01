const loader = document.querySelector(".loading");
const main = document.querySelector("main");

main.style.display = "none";

window.onload = () => {
    window.setInterval(function () {
        loader.style.display = "none";
        main.style.display = "block";
    }, 1900)
};

const url = "https://grafs.no/wp-json/wc/v3/products?consumer_key=ck_842a940736a6103fd78f750256ff5ede2b209c25&consumer_secret=cs_091f907c9c293cf0810e8dc61f528d489f9eeb05";

async function grafs() {
    try {
        const response = await fetch(url);
        const result = await response.json();

        games(result)
        inCart(result)

    } catch (errorMessage) {
        // gamesTopContainer.innerHTML = "";
        // console.log(errorMessage);
    }
}

grafs();

const gamesExtra = document.querySelector(".games-display");
const products = document.querySelector(".cartProducts");
// const productsContainer = document.querySelector(".products");

function games(result) {
    let count = 0;

    for (let i = 0; i < result.length; i++) {
        count++
        let game = result[i];

        gamesExtra.innerHTML += `<figure class="game">
                                <a href="details.html?id=${game.id}">
                                <img class="gallery" src="${game.images[0].src}" alt="Picture of the ${game.name} cover"/></a>
                                <a href="details.html?id=${game.id}" class="gamelink">${game.name}</a>
                                </figure>
                                `
        if (count === 6) {
            break;
        }
    }
};

products.insertAdjacentHTML("afterbegin", `<h2 class="cartHeader">Products</h2>`)
products.insertAdjacentHTML("beforeend", `<a href="checkout.html" class="button button-blue">Proceed to checkout</a>`)

function inCart(result) {
    let count = 0;

    for (let i = 0; i < result.length; i++) {
        count++
        let game = result[i];

        let html = "";

        html += `<section class="cart-item-container">
                    <div class="gameinfo">
                
                        <figure>
                            <a href="details.html?id=${game.id}">
                                <img src="${game.images[0].src}" alt="Picture of the ${game.name} cover" class="img-cart"/>
                            </a>
                        </figure>
                                
                        <h3><a href="details.html?id=${game.id}" class="gamelink">${game.name}</a></h3>
                        <p class="price"><span class="valuta">NOK</span> 299<span>,-</span></p>
                                
                        <figure>
                            <img src="/images/icons/trash.svg" alt="Remove game" class="trash" value="${game.id}" />
                        </figure>
                                
                    </div>
                </section>`

        let cartHeader = document.querySelector(".cartHeader");
        cartHeader.insertAdjacentHTML("afterend", html);


        if (count === 2) {
            break;
        }
    }

    let trashImg = document.querySelectorAll(".trash");
    const trash = Array.from(trashImg);

    trash.forEach(item => {

        item.addEventListener("click", (e) => {
            let IDvalue = e.target.attributes[3].value;

            result.filter(game => {

                if (game.id == IDvalue) {
                    e.target.parentElement.parentElement.parentElement.remove();
                }
            })
        })
        item.addEventListener("click", check)
    });

    function check() {
        let btn = document.querySelector(".button");
        let cartHeader = document.querySelector(".cartHeader");
        let cartItems = products.children;
        const arrCart = Object.entries(cartItems);
        let findItem = arrCart[1];

        if (findItem[1].classList.contains("cart-item-container")) {
            console.log("yay")
            btn.href = "/checkout.html"
            btn.innerText = `Proceed to checkout`

        } else {
            console.log("Gone")
            btn.href = "/shop.html"
            btn.innerText = `Go shopping`
            cartHeader.insertAdjacentHTML("afterend", `<p>Your cart is empty</p>`);
        }
    }
};


// let trashImg = document.querySelectorAll(".trash");
// let trash = Array.from(trashImg);

// const header = document.querySelector(".cartHeader");
// console.log(header.nextElementSibling.classList === "cart-item-container")
// arrCart.filter(cart => {
//     console.log(cart)
//     if(cart.className.includes("section.cart-item-container")) {
//         console.log("this exists")
//     }
// })

// if(arrCart.classList.contains("cart-item-container")) {
//     console.log(this)
// }
// let items = Array.from(cartItems);
// let itemsInCart = items.some(e => {
//     e.className.includes("cart-item-container")
// })

// console.log(typeof items === 'object' && items !== null)
// console.log(itemsInCart)


// function checkCart(value, array) {
//     return array.some(e => e === value)
// }
// checkCart(trashImg, items)
// console.log(itemsInCart)

// console.log(items.some(classList.contains("cart-item-container")))

// items.forEach(i => {

//     let numberOfItems = i.classList.contains("cart-item-container");
//     let btn = document.querySelector(".button");
//     // console.log(numberOfItems)

//     // if (numberOfItems) {
//     //     console.log(this)
//     // }
//     // if (numberOfItems > 0) {
//     //     // console.log("true that")
//     //     btn.href = "/checkout.html"
//     //     btn.innerText = `Proceed to checkout`
//     // } else if (!numberOfItems) {
//     //     // console.log("false that")
//     //     btn.href = "/shop.html"
//     //     btn.innerText = `Go shopping`
//     //     cartHeader.insertAdjacentHTML("afterend", `<p>Your cart is empty</p>`);
//     // }

//     // console.log(numberOfItems)
// })


// let cartItems = products.children;
// let items = Array.from(cartItems);

// function cartBtn() {

//     items.forEach(i => {

//         let numberOfItems = i.classList.contains("cart-item-container");
//         let btn = document.querySelector(".button");

//         // console.log(i)

//         if (numberOfItems > 0) {
//             // console.log("true that")
//             btn.href = "/checkout.html"
//             btn.innerText = `Proceed to checkout`
//         } else if (numberOfItems) {
//             // console.log("false that")
//             btn.href = "/shop.html"
//             btn.innerText = `Go shopping`
//             cartHeader.insertAdjacentHTML("afterend", `<p>Your cart is empty</p>`);
//         }
//     });
// };

// cartBtn()




//     // let cartItems = productsContainer.children;
//     // let items = Array.from(cartItems);
//     // console.log(items)
//     // let cartItem = document.querySelectorAll("cart-item-container");
//     // if(cartItem.length == 0) {
//     //     let btn = document.querySelector(".button");
//     //     btn.href = "/shop.html"
//     //     btn.innerText = `Go shopping`
//     // }
// }

// items.addEventListener("change", cartBtn)

// .classList.includes("cart-item-container")

// let cartItem = document.querySelectorAll(".cart-item-container");
// cartItem.length--
// console.log(cartItem.length)