const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://grafs.no/wp-json/wc/store/products/" + id;
// const loader = document.querySelector(".loader");
const container = document.querySelector(".container");
const detailBtns = document.querySelectorAll(".detail-btn");

async function fetchGame() {
    try {
        const response = await fetch(url);
        const result = await response.json();

        // loader.remove();
        detailedInfo(result);
        introHeading(result);
        imgSection(result);
        gameInCart(result);

    } catch {
        // loader.remove();
        container.classList.add("container-error");
        container.innerHTML = displayFailed();
    } finally {}
};

fetchGame();

function displayFailed(message = "Ops! Something went wrong.") {
    return `<div class="error">${message}</div>`;
};

const title = document.querySelector("title");
const breadcrumbs = document.querySelector(".location");
const heading = document.querySelector("h1");
const reviews = document.querySelector(".reviews");

function detailedInfo(result) {

    if (result.name)
        gameName = result.name;
    const nameCapitalized = gameName.charAt(0).toUpperCase() + gameName.slice(1)
    title.innerText = `${nameCapitalized}`;
    breadcrumbs.innerHTML = `<strong>${nameCapitalized}</strong>`;
    heading.innerText = `${nameCapitalized}`;
};

const image = document.querySelector(".img-header");
const genre = document.querySelector(".genre");

// GENRE

function imgSection(result) {
    const imagelist = result.images;
    const imageSub = document.querySelector(".img-sub");
    // console.log(imagelist)

    for (let i = 0; i < imagelist.length; i++) {
        image.src = imagelist[0].src;
        imageSub.src = imagelist[1].src;

    }
    // imagelist.forEach(img => {
    //     image.src = `${img.src}`
    //     // console.log(img[0])
    // });

    let category = result.categories;
    for (let i = 0; i < category.length; i++) {
        const genresName = category[i];
        genre.innerHTML += `<p>${genresName.name}</p>`;
    };
    reviews.innerHTML += `<span>Number of reviews:</span> ${result.review_count}`
};


const paraIntro = document.querySelector(".intro-text");
const platforms = document.querySelector(".platform");
const price = document.querySelector(".pricetag");

function introHeading(result) {
    price.innerHTML = `${result.prices.price},-`
    paraIntro.innerHTML += `${result.description}`;

    const platform = result.tags;

    for (let i = 0; i < platform.length; i++) {
        let gamePlatform = platform[i].name;

        if (gamePlatform === "PC") {
            platforms.innerHTML += `<p class="hidePlat">${gamePlatform}</p><img src="/images/icons/platform/windows.svg" alt="Picture of Windows-logo" class="plat-logo">`;
        }

        if (gamePlatform === "PlayStation 4") {
            platforms.innerHTML += `<p class="hidePlat">${gamePlatform}</p><img src="/images/icons/platform/ps.svg" alt="Picture of PlayStation-logo" class="plat-logo ps4">`;
        }

        if (gamePlatform === "Xbox One") {
            platforms.innerHTML += `<p class="hidePlat">${gamePlatform}</p><img src="/images/icons/platform/xbox.svg" alt="Picture of Xbox-logo" class="plat-logo xbox">`;
        }

        if (gamePlatform === "Xbox Series S/X") {
            platforms.innerHTML += `<p class="hidePlat">${gamePlatform}</p><img src="/images/icons/platform/xbox-series.svg" alt="Picture of Xbox-logo" class="plat-logo xbox-series">`;
        }

        if (gamePlatform === "Nintendo Switch") {
            platforms.innerHTML += `<p class="hidePlat">${gamePlatform}</p><img src="/images/icons/platform/nintendo.svg" alt="Picture of Nintendo-logo" class="plat-logo">`;
        }

        if (gamePlatform === "macOS" || gamePlatform === "iOS") {
            platforms.innerHTML += `<p class="hidePlat">${gamePlatform}</p><img src="/images/icons/platform/ios.svg" alt="Picture of macOS-logo" class="plat-logo ios">`;
        }

        if (gamePlatform === "Linux") {
            platforms.innerHTML += `<p class="hidePlat">${gamePlatform}</p><img src="/images/icons/platform/linux.svg" alt="Picture of Linux-logo" class="plat-logo">`;
        }

        if (gamePlatform === "PS Vita") {
            platforms.innerHTML += `<p class="hidePlat">${gamePlatform}</p><img src="/images/icons/platform/vita.svg" alt="Picture of PS Vita-logo" class="plat-logo vita">`;
        }

        if (gamePlatform === "Android") {
            platforms.innerHTML += `<p class="hidePlat">${gamePlatform}</p><img src="/images/icons/platform/android.svg" alt="Picture of Android-logo" class="plat-logo android">`;
        }
    };
};

// MODAL - BUTTONS - CHANGE ON ADD //

const modal = document.querySelector(".modal");
// const idBtn = document.querySelector(".btn");
const openModal = document.querySelectorAll("[data-open]");
const closeModal = document.querySelectorAll("[data-close]");

for (let i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener("click", function () {
        modal.style.display = "flex";
    });
};

// ADDED TO CART BUTTONS //

detailBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        btn.innerText = "Added";
        btn.style.border = "var(--secondary-border-purple)";
        btn.style.backgroundColor = "var(--secondary-color-purple)";
        btn.style.color = "white";
    })
});

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";

        setInterval(function () {
            count++;

            if (count === 2) {
                clearInterval();

                detailBtns.forEach(btn => {
                    btn.innerText = "Add to cart";
                    btn.style.backgroundColor = "orange";
                    btn.style.color = "black";
                    btn.style.border = "var(--primary-color-btn-border)";
                })
            }
        }, 1000);
    }
}

// MODAL CART //

const cartImg = document.querySelector(".cartImg");
const cartInfo = document.querySelector(".cartInfo")

function gameInCart(result) {

    let platform = result.tags;

    const imagelist = result.images
    imagelist.forEach(img => {
        cartImg.innerHTML += `<img class="imgCart" src="${img.src}">`
    })

    for (let i = 0; i < platform.length; i++) {
        let gamePlatform = platform[0].name;

        cartInfo.innerHTML += `<p class="cartName">${result.name}</p>
                            <p>${result.prices.price},-</p>
                            <p><strong>Platform:</strong> ${gamePlatform}</p>`
        break;
    }
};

let count = 0;

for (let i = 0; i < closeModal.length; i++) {
    closeModal[i].addEventListener("click", function () {
        modal.style.display = "none";

        setInterval(function () {
            count++;

            if (count === 2) {
                clearInterval();

                detailBtns.forEach(btn => {
                    btn.innerText = "Add to cart";
                    btn.style.backgroundColor = "orange";
                    btn.style.color = "black";
                    btn.style.border = "var(--primary-color-btn-border)";
                })
            }
        }, 1000);
    });
};

const loader = document.querySelector(".loading");
const main = document.querySelector("main");

main.style.display = "none";

window.onload = () => {
    window.setInterval(function () {
        loader.style.display = "none";
        main.style.display = "block";
    }, 1900)
};