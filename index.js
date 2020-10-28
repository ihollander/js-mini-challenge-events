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

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
const header = document.querySelector("h1#header")
function toggleColor(element) {
  if (element.target.style.color === "red") {
    element.target.style.color = "black"
  } else {
    element.target.style.color = "red"
  }
}
header.addEventListener("click", toggleColor)

/***** Deliverable 2 *****/
const addPlayerForm = document.querySelector("#new-player-form")

function addPlayerSubmit(event) {
  event.preventDefault()
  const playerForm = event.target
  
  const number = playerForm.number.value
  const name = playerForm.name.value
  const nickname = playerForm.nickname.value
  const photo = playerForm.photo.value

  playerObj = {
    number: number,
    name: name,
    nickname: nickname,
    photo: photo,
    likes: 1000
  }

  renderPlayer(playerObj)
  event.target.reset()
}

addPlayerForm.addEventListener("submit", addPlayerSubmit)


/***** Deliverable 3 *****/
