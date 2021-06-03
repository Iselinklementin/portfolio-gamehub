const url = "https://grafs.no/wp-json/wc/v3/products?consumer_key=ck_842a940736a6103fd78f750256ff5ede2b209c25&consumer_secret=cs_091f907c9c293cf0810e8dc61f528d489f9eeb05";
const gamesTopContainer = document.querySelector(".games-display-one");
const sortBtn = document.querySelector(".filter-btn");
const dropdown = document.querySelector(".dropdown-content");
const sortList = document.querySelectorAll(".list-item");
const drop = document.querySelector("#drop")


async function grafs() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    gamesTopContainer.innerHTML = "";
    createHtml(result);
    filterGenre(result);

    // removePlatform();
    filterPlatform(result);

  } catch (errorMessage) {
    gamesTopContainer.innerHTML = "";
    console.log(errorMessage);
  }
}

grafs();

// FILTER GENRE //

function dropShow() {
  drop.classList.toggle("show");
}

sortBtn.addEventListener("click", dropShow);

sortList.forEach(item => {
  item.addEventListener("click", function () {
    if (!this.classList.contains("selected")) {
      this.parentNode.querySelector(".list-item.selected").classList.remove("selected");
      this.classList.add("selected");
      drop.classList.toggle("show");
    }
  })
});

function filterGenre(result) {
  for (let i = 0; i < sortList.length; i++) {

    sortList[i].onclick = function () {

      gamesTopContainer.innerHTML = "";
      sortBtn.innerText = sortList[i].innerText;

      for (let i = 0; i < result.length; i++) {
        let catName = result[i].categories;

        let category = catName.find(cat => {
          if (cat.name == sortBtn.innerText) {
            return true;
          }
          return false;
        })

        if (category) {
          const list = result[i];
          const imagelist = list.images;

          gamesTopContainer.innerHTML += `<a href="details.html?id=${list.id}" class="card">
                                        <figure class="game1 game2 game3 game4 gamehover">
                                        <div class="games-java"><img class="gallery-top" id="games-java-css" src="${imagelist[0].src}"/></div>
                                        <div class="text-wrapper">
                                        <h3 class="game-name" text-decoration="none">${list.name}</h3>
                                        </div>
                                        </figure>
                                        </a>
                                       `
        }
      }
    }
  }
};

// Create HTML //

function createHtml(result) {
  for (let i = 0; i < result.length; i++) {
    const list = result[i];
    const imagelist = list.images;

    gamesTopContainer.innerHTML += `<a href="details.html?id=${list.id}" class="card">
                                <figure class="game1 game2 game3 game4 gamehover">
                                <div class="games-java"><img class="gallery-top" id="games-java-css" src="${imagelist[0].src}"/></div>
                                <div class="text-wrapper">
                                <h3 class="game-name" text-decoration="none">${list.name}</h3>
                                </div>
                                </figure>
                                </a>
                               `
  }
};

////////// NINTENDO FILTER ////////

const nintendo = document.querySelector(".nintendo-filter");
const box = document.querySelector(".nintendo-box");
const platNameNintendo = document.querySelector(".plat-name-nintendo");
const nintendoIcon = document.querySelector(".nintendo-gamepad");
const nintendoArrow = document.querySelector(".nintendo-arrow");

function toggleNintendo() {
  platNameNintendo.classList.toggle("toggle-name");
  box.classList.toggle("toggle-box");
  // nintendo.classList.toggle("active-button");

  if (nintendoArrow.classList.contains("show-arrow")) {
    nintendoArrow.classList.remove("show-arrow")
  } else {
    nintendoArrow.classList.add("show-arrow");
  }
}

nintendo.addEventListener("click", toggleNintendo);

//////////  PC  ////////

const pc = document.querySelector(".pc-filter");
const pcBox = document.querySelector(".pc-box");
const platNamePC = document.querySelector(".plat-name-pc");
const pcIcon = document.querySelector(".pc-mouse");
const pcArrow = document.querySelector(".pc-arrow");

function togglePC() {
  platNamePC.classList.toggle("toggle-name");
  pcBox.classList.toggle("toggle-box");
  // pc.classList.toggle("active-button");

  if (pcArrow.classList.contains("show-arrow")) {
    pcArrow.classList.remove("show-arrow")
  } else {
    pcArrow.classList.add("show-arrow");
  }
}

pc.addEventListener("click", togglePC);

//////////  XBOX FILTER ////////

const xbox = document.querySelector(".xbox-filter");
const xboxBox = document.querySelector(".xbox-box");
const platNameXbox = document.querySelector(".plat-name-xbox");
const xboxIcon = document.querySelector(".xbox-gamepad");
const xboxArrow = document.querySelector(".xbox-arrow");

function toggleXbox() {
  platNameXbox.classList.toggle("toggle-name");
  xboxBox.classList.toggle("toggle-box");
  // xbox.classList.toggle("active-button");

  if (xboxArrow.classList.contains("show-arrow")) {
    xboxArrow.classList.remove("show-arrow")
  } else {
    xboxArrow.classList.add("show-arrow");
  }
}

xbox.addEventListener("click", toggleXbox);

//////////  PLAYSTATION FILTER ////////

const ps = document.querySelector(".ps-filter");
const psBox = document.querySelector(".ps-box");
const platNamePs = document.querySelector(".plat-name-ps");
const psIcon = document.querySelector(".ps-gamepad");
const psArrow = document.querySelector(".ps-arrow");

function togglePlaystation() {
  platNamePs.classList.toggle("toggle-name");
  psBox.classList.toggle("toggle-box");
  // ps.classList.toggle("active-button");

  if (psArrow.classList.contains("show-arrow")) {
    psArrow.classList.remove("show-arrow");
  } else {
    psArrow.classList.add("show-arrow");
    // ps.classList.add("active-button")
  }
  // if(ps.className.includes("active-button")) {

  // }
}

ps.addEventListener("click", togglePlaystation);


// Toggle platform filter //

const container = document.querySelectorAll(".containers")

// function addActive() {
//   for (let i = 0; i < container.length; i++) {
//   container[i].onclick = function () {
//     this.classList.add("active-button")
//     // console.log(this)
//   }
// }
// }

// function removeActive() {
//   for (let i = 0; i < container.length; i++) {
//     container[i].onclick = function () {

//       // console.log("noe")
//       if (this.className.includes("active-button")) {
//         console.log("noe")
// console.log(this.classList[2])
// this.className.remove("active-button")
// this.classList[2].remove()
// toggleXbox()

// if (this.className.includes("xbox-filter")) {
//   this.classList.remove("active-button")
//   toggleXbox()

// }
// break;
// if (this.className.includes("ps-filter")) {
//   this.classList.remove("active-button")
//   togglePlaystation()
//   break;
// }

// if (this.className.includes("pc-filter")) {
//   this.classList.remove("active-button")
//   togglePC()
//   break;
// }

// if (this.className.includes("nintendo-filter")) {
//   this.classList.remove("active-button")
//   toggleNintendo()
//   break;
// }
//       }
//     }
//   }
// }

// removeActive()

// function removePlatforms() {
//   for (let i = 0; i < container.length; i++) {
//     container[i].addEventListener("click", (e) =>  {

//       // if (this.className.includes("active-button")) {
//       //   console.log("noe")
//       // }
//       console.log(e.target)
//       let containers = Array.from(e.target.parentElement.children)

//       containers.map(item => {
//         let classes = Array.from(item.classList)

//         console.log(item)
//         classes.filter(c => {
//           if (c === "active-button") {
//             // console.log(item)
//             // console.log(c)
//             if (item.className.includes("xbox-filter")) {
//               item.classList.remove("active-button")
//               toggleXbox()
//             }

//             if (item.className.includes("ps-filter")) {
//               item.classList.remove("active-button")
//               togglePlaystation()
//             }

//             if (item.className.includes("pc-filter")) {
//               item.classList.remove("active-button")
//               togglePC()
//             }

//             if (item.className.includes("nintendo-filter")) {
//               item.classList.remove("active-button")
//               toggleNintendo()
//             }
//             // console.log(this)
//             // if (!item.className.includes("active-button")) {
//             //   gamesTopContainer.innerHTML = "";
//             //   createHtml(result);
//             // }
//           }
//         })
//       })
//       // console.log(this)
//       e.target.classList.add("active-button")
//     }
//     )}
// };

// removePlatforms()
// removeActive()


// function filterPlatform(result) {
//   for (let i = 0; i < container.length; i++) {
//     container[i].onclick = function () {

//       const target = this.attributes[0];
//       const value = target.value;
//       this.classList.add("active-button");

// // console.log(this)
// //       this.classList.toggle("active-button");
// //       // this.classList.add("current-active-button");

//       for (let i = 0; i < result.length; i++) {
//         let platformTag = result[i].tags;

//         platformTag.filter(tag => {
//           if (tag.name == value && this.classList.contains("active-button")) {

//             gamesTopContainer.innerHTML = "";
//             const list = result[i];
//             const imagelist = list.images;

//             gamesTopContainer.innerHTML += `<a href="details.html?id=${list.id}" class="card">
//                                               <figure class="game1 game2 game3 game4 gamehover">
//                                               <div class="games-java"><img class="gallery-top" id="games-java-css" src="${imagelist[0].src}"/></div>
//                                               <div class="text-wrapper">
//                                               <h3 class="game-name" text-decoration="none">${list.name}</h3>
//                                               </div>
//                                               </figure>
//                                               </a>
//                                              `
//           }
//         })

//         // if (c !== "active-button") {
//         //   console.log(this)
//         // }

//         if (!this.classList.contains("active-button")) {
//           gamesTopContainer.innerHTML = "";
//           createHtml(result);
//           console.log(this)
//         }
//       }
//     }
//   }
// };


const loader = document.querySelector(".loading");
const main = document.querySelector("main");

main.style.display = "none";

window.onload = () => {
  window.setInterval(function () {
    loader.style.display = "none";
    main.style.display = "block";
  }, 1900)
};

window.addEventListener("click", removeCart)

function filterPlatform(result) {
  for (let i = 0; i < container.length; i++) {

    // TURN OF THE OTHER BUTTONS ONCLICK
    // ONLY ONE ACTIVE

    container[i].onclick = function () {
      gamesTopContainer.innerHTML = "";

      if (this.className.includes("active-button")) {
        // console.log("Now")
        gamesTopContainer.innerHTML = "";
        this.classList.toggle("active-button")
        return createHtml(result);
        // break;
      }

      // let count = 0;
      const target = this.attributes[0];
      const value = target.value;
      // this.classList.remove("current-active-button");

      let containers = Array.from(this.parentElement.children)

      containers.map(item => {
        let classes = Array.from(item.classList)

        classes.filter(c => {
          if (c === "active-button") {
            // count++
            // console.log(item)
            if (item.className.includes("xbox-filter")) {
              item.classList.remove("active-button")
              toggleXbox()
            }

            if (item.className.includes("ps-filter")) {
              item.classList.remove("active-button")
              togglePlaystation()
            }

            if (item.className.includes("pc-filter")) {
              item.classList.remove("active-button")
              togglePC()
            }

            if (item.className.includes("nintendo-filter")) {
              item.classList.remove("active-button")
              toggleNintendo()
            }

            // count++
            // console.log(this.className)
            // console.log(count)

            // if (this)
            // if (!item.className.includes("active-button")) {
            //   gamesTopContainer.innerHTML = "";
            //   createHtml(result);
            // }
          }
        })
      })

      this.classList.toggle("active-button");
      // this.classList.add("current-active-button");

      for (let i = 0; i < result.length; i++) {
        let platformTag = result[i].tags;

        platformTag.filter(tag => {
          if (tag.name == value && this.classList.contains("active-button")) {

            const list = result[i];
            const imagelist = list.images;

            gamesTopContainer.innerHTML += `<a href="details.html?id=${list.id}" class="card">
                                              <figure class="game1 game2 game3 game4 gamehover">
                                              <div class="games-java"><img class="gallery-top" id="games-java-css" src="${imagelist[0].src}"/></div>
                                              <div class="text-wrapper">
                                              <h3 class="game-name" text-decoration="none">${list.name}</h3>
                                              </div>
                                              </figure>
                                              </a>
                                             `
          }
        })

        // if (c !== "active-button") {
        //   console.log(this)
        // }

        // if (!this.classList.contains("active-button")) {
        //   gamesTopContainer.innerHTML = "";
        //   createHtml(result);
        //   console.log(this)
        // }
      }
    }

  }
};



// function filterPlatform2(result) {
//   gamesTopContainer.innerHTML = "";

//   for (let i = 0; i < container.length; i++) {
//     container[i].onclick = function (e) {

//       const target = e.target.attributes[0];
//       const value = e.target.value;

//       for (let i = 0; i < result.length; i++) {
//         let platformTag = result[i].tags;

//         platformTag.filter(tag => {
//           if (tag.name == value && this.classList.contains("active-button")) {

//             const list = result[i];
//             const imagelist = list.images;

//             gamesTopContainer.innerHTML += `<a href="details.html?id=${list.id}" class="card">
//                                               <figure class="game1 game2 game3 game4 gamehover">
//                                               <div class="games-java"><img class="gallery-top" id="games-java-css" src="${imagelist[0].src}"/></div>
//                                               <div class="text-wrapper">
//                                               <h3 class="game-name" text-decoration="none">${list.name}</h3>
//                                               </div>
//                                               </figure>
//                                               </a>
//                                              `
//           }
//         })

//         // if (c !== "active-button") {
//         //   console.log(this)
//         // }

//         if (!this.classList.contains("active-button")) {
//           gamesTopContainer.innerHTML = "";
//           createHtml(result);
//           console.log(this)
//         }
//       }

//     }
//   }
// }