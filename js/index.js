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
    }
    catch (errorMessage){
        gamesTopContainer.innerHTML = "";
        console.log(errorMessage);
    }
}

grafs();

function games(result) {
    for (let i = 0; i < result.length; i++) {
        const list = result[i];
        const imagelist = list.images;
        
        imagelist.forEach(img => {

            gamesTopContainer.innerHTML += `<a href="details.html?id=${list.id}" class="card">
                                    <figure class="game1 game2 game3 game4 gamehover">
                                    <div class="games-java"><img class="gallery-top" id="games-java-css" src="${img.src}"/></div>
                                    <div class="text-wrapper">
                                    <h3 class="game-name" text-decoration="none">${list.name}</h3>
                                    </div>
                                    </figure>
                                    </a>
                                   `
            });   
    }
};