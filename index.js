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
function toggleColor(event) {
  if (event.target.style.color === "red") {
    event.target.style.color = "black"
  } else {
    event.target.style.color = "red"
  }
}

document.querySelector('h1#header').addEventListener('click', toggleColor)


/***** Deliverable 2 *****/

const form = document.getElementById("new-player-form")

form.addEventListener("submit", event => {
  event.preventDefault()
  const number = event.target.number.value
  const name = event.target.name.value
  const nickname = event.target.nickname.value
  const photo = event.target.photo.value
  const playerObj = {
    name: name,
    number: number,
    nickname: nickname,
    photo: photo
  }

  renderPlayer(playerObj)
  event.target.reset()

});

/***** Deliverable 3 *****/

playerContainer.addEventListener("click", event => {
  if (event.target.matches(".like-button")) {
    const playerDiv = event.target.closest(".player")
    const likesPtag = playerDiv.querySelector(".likes")
    const likesCount = parseInt(likesPtag.textContent) + 1
    likesPtag.textContent = `${likesCount} likes`
  }
})