/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")
  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
    `
  //DEVLIVERABLE #3 *****************************

  const likeButton = playerDiv.querySelector("button.like-button")
  likeButton.addEventListener("click", function(event) {
    const likes = playerDiv.querySelector("p.likes")
    const totalLikes = parseInt(likes.textContent)
    likes.textContent = totalLikes + 1 + " likes"
  })

  //******************************************* */
  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/

function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

const header = document.querySelector("h1#header")

header.addEventListener("click", function() {
  toggleColor(document.querySelector("h1#header"))
})

// function toggleRedBlack(event) {
//   if (event.target.style.color === "red") {
//     event.target.style.color = "black"
//   } else {
//     event.target.style.color = "red"
//   }
// }

// const header = document.querySelector("h1#header")

// header.addEventListener("click", toggleRedBlack)

/***** Deliverable 2 *****/

const newPlayerForm = document.querySelector("#new-player-form")

newPlayerForm.addEventListener("submit", function(event) {
  event.preventDefault()

  const number = event.target.number.value
  const name = event.target.name.value
  const nickname = event.target.nickname.value
  const photo = event.target.photo.value

  const PlayerObj = {
    number: number,
    name: name,
    nickname: nickname,
    photo: photo,
    likes: 0
  }

  renderPlayer(PlayerObj)

  event.target.reset()
})

/***** Deliverable 3 *****/


// let likeButtons = document.querySelectorAll("button.like-button")
// let likeContainer = document.querySelectorAll("p.likes")

// PLAYERS.forEach(function(player) {
//   let likeCounter = player.likes
//   if (player.number == "11") {
//     likeButtons[0].addEventListener("click", function(event) {
//     likeContainer[0].innerHTML = (likeCounter += 1) + " likes"
//     })
//   } else if (player.number == "9") {
//     likeButtons[1].addEventListener("click", function(event) {
//     likeContainer[1].innerHTML = (likeCounter += 1) + " likes"
//     })
//   } else if (player.number == "66") {
//     likeButtons[2].addEventListener("click", function(event) {
//     likeContainer[2].innerHTML = (likeCounter += 1) + " likes"
//     })
//   } else if (player.number == "14") {
//     likeButtons[3].addEventListener("click", function(event) {
//     likeContainer[3].innerHTML = (likeCounter += 1) + " likes"
//     })
//   }
  
// })










