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

  const likeBtn = playerDiv.querySelector(".like-button")
  likeBtn.addEventListener("click", function() {
    const playerLikes = playerDiv.querySelector(".likes")
    player.likes += 1 
    // can't figure out how to keep "likes" when adding a 1 like
    
    playerLikes.textContent = player.likes
  
  })
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/

const header = document.querySelector("h1#header")

header.addEventListener("click", function() {
  toggleColor(header)
})

function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}


/***** Deliverable 2 *****/

const playerForm = document.querySelector("#new-player-form")

playerForm.addEventListener("submit", function(event) {
  event.preventDefault()

  const number = event.target.number.value
  const name = event.target.name.value
  const nickname = event.target.nickname.value
  const photo = event.target.photo.value

  const player = {
    number: number,
    name: name,
    nickname: nickname,
    photo: photo,
    likes: 0
  }

  renderPlayer(player)

  event.target.reset()
})


/***** Deliverable 3 *****/
