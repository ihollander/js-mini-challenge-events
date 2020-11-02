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

const header = (document.querySelector("h1#header"))

function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

document.addEventListener('click', event => {
  if (event.target === header) {
    toggleColor(header)
  }
  else if (event.target.className === 'like-button') {
    addLikes(event)

  }
})

/***** Deliverable 2 *****/

const newPlayerForm = (document.querySelector("#new-player-form"))

newPlayerForm.addEventListener('submit', event => {
  event.preventDefault()
  let player = {}
  player.number = event.target.number.value
  player.name = event.target.name.value
  player.nickname = event.target.nickname.value
  player.photo = event.target.photo.value
  player.likes = 0
  renderPlayer(player)
})

/***** Deliverable 3 *****/

function addLikes(event) {
  const likeTag = event.target.parentNode.querySelector('p')
  const likes = parseInt(likeTag.innerText, 10)
  likeTag.innerText = `${likes + 1} likes`
}