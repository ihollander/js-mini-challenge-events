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
const toggleColor = element => {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

const header = document.querySelector("#header")
header.addEventListener("click", () => {
	toggleColor(header)
})


/***** Deliverable 2 *****/

const newPlayer = document.querySelector("#new-player-form")


newPlayer.addEventListener("submit", (event) => {
	event.preventDefault()

	// setting variables for input 
	// 'number' refers to the input in the HTML form
	const number = event.target.number.value
	const name = event.target.name.value
	const nickname = event.target.nickname.value
	const photo = event.target.photo.value

// using above variables to set new Player for rendering
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



// created event listener, using (event) as my arguement. If event matches the like button, dial up to the nearest player and dial back down to the likes. Call likes.textContent, parse and add 1.

playerContainer.addEventListener("click", (event) => {

	if (event.target.matches(".like-button")) {
		
		const player  = event.target.closest(".player")
		const likes = player.querySelector(".likes")
		likes.textContent = parseInt(likes.textContent) + 1
		
		
	}

		

})