const url = "https://grafs.no/wp-json/wc/store/products/";
const galleryImg = document.querySelector(".games-java");
const gamesTopContainer = document.querySelector(".games-display-one");
const gallery = document.querySelector(".games-gallery");

async function grafs() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        gamesTopContainer.innerHTML = "";
        games(result);
    } catch (errorMessage) {
        gamesTopContainer.innerHTML = "";
        console.log(errorMessage);
    }
}

grafs();

function games(result) {

    result.filter(game => {

        gamesTopContainer.innerHTML += `<a href="details.html?id=${game.id}" class="card">
                                    <figure class="game1 game2 game3 game4 gamehover">
                                    <div class="games-java"><img class="gallery-top" id="games-java-css" src="${game.images[0].src}"/></div>
                                    <div class="text-wrapper">
                                    <h3 class="game-name" text-decoration="none">${game.name}</h3>
                                    </div>
                                    </figure>
                                    </a>`
    })
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