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
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

const header = document.querySelector("h1#header")

function handleToggleColor(e) {
  toggleColor(e.target)
}

header.addEventListener('click', handleToggleColor)



/***** Deliverable 2 *****/
const newPlayerForm = document.querySelector("#new-player-form")

function handlePlayerFormSubmit(e) {
  e.preventDefault()
  
  const number = e.target.number.value
  const name = e.target.name.value
  const nickname = e.target.nickname.value
  const photo = e.target.photo.value
  
  const playerObj = {
    number: number,
    name: name,
    nickname: nickname,
    photo: photo,
    likes: 999
  }

  renderPlayer(playerObj) 

  e.target.reset()
}

newPlayerForm.addEventListener('submit', handlePlayerFormSubmit)



/***** Deliverable 3 *****/
playerContainer.addEventListener('click', function (e) {
  if (e.target.matches(".like-button")) {
    const likeButton = e.target
    const playerDiv = likeButton.closest(".player")
    const likesPtag = playerDiv.querySelector(".likes")
    const likesCount = parseInt(likesPtag.textContent.replace(' likes',''))
    likesPtag.textContent = likesCount + 1 + ' likes'
  }
})