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
let pageHeader = document.querySelector("h1#header")

pageHeader.addEventListener('click', (event) => {
element = event.target
toggleColor(element)
})


function toggleColor(element) {
  if (element.style.color === "red") {

    element.style.color = "black"
  } else {
    element.style.color = "red"

  }
}


/***** Deliverable 2 *****/

const newPlayerForm = document.querySelector('form#new-player-form')
newPlayerForm.addEventListener('submit', (event) =>{
  event.preventDefault()
  let playerObj = {
    number: event.target.number.value,
    name: event.target.name.value,
    nickname: event.target.nickname.value,
    photo: event.target.photo.value,
    likes: 0
  }
  renderPlayer(playerObj)
  event.target.reset()
}
)

/***** Deliverable 3 *****/

playerContainer.addEventListener('click',(event)=> { 
  if (event.target.matches("button.like-button")){
    let button = event.target
    let player = button.closest("div.player")
    let likes = player.querySelector(".likes")
    let playerLikes = parseInt(likes.innerText) + 1

    likes.innerHTML = playerLikes
  }
})
