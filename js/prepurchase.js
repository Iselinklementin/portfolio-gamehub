const cartImg = document.querySelector(".cartImg");
const cartInfo = document.querySelector(".cartInfo");

function gameInCart () {
    cartImg.innerHTML += `<img class="imgCart" id="shopimg" src="images/mobile/immortal-mobile-new.jpg">`
    cartInfo.innerHTML +=  `<p class="cartName">Immortal</p>
                            <p>299,-</p>
                            <p><strong>Released:</strong> 01.02.2019
                            <br><strong>Platform:</strong> PC</p>`
};

gameInCart();

window.addEventListener("click", removeCart)