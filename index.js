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

// select the document header by using the querySelector() method
const headerStyle = document.querySelector("#header") 
// write an event listener that will use the toggleColor helper function,
// to change the color of the header when a user clicks on it.
headerStyle.addEventListener("click", event => {
  toggleColor(event.target)
  console.log("clicked")
})

/***** Deliverable 2 *****/

// select the new player form using the querySelector() method
const newPlayerForm = document.querySelector("#new-player-form")
// create an event listener for a new player being added to the form
newPlayerForm.addEventListener("submit", event => {
  event.preventDefault()

  // get the user input from the form
  const newPlayer = {
    number: event.target.number.value,
    name: event.target.name.value,
    nickname: event.target.nickname.value,
    photo: event.target.photo.value,
    likes: 0
  }
  // render the new player on the page
  renderPlayer(newPlayer)
  
  // clear the input fields by resetting them
  event.target.reset()
})

/***** Deliverable 3 *****/

// add an event listener to hear when the like button is clicked
playerContainer.addEventListener("click", event => {
  // select the like button by using .matches
  if (event.target.matches(".like-button")) {
    // selects the player div and saves it to a variable
    const playerDiv = event.target.closest(".player")
    // uses the player div to access the likes 
    const likesPTag = playerDiv.querySelector(".likes")
    // parses the likes data from a string to an integer and increases the integer by 1
    const newLikes = parseInt(likesPTag.textContent) + 1
    // updates the number of likes on the page
    likesPTag.textContent = `${newLikes} likes`
  }
})
