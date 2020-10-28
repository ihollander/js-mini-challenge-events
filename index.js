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

//find dom object
const header = document.querySelector('#header')
//add listener to object
header.addEventListener('click', function(){
  toggleColor(header)
  // click
  // work
})

/***** Deliverable 2 *****/
//find form object
const form = document.querySelector('#new-player-form')
const submitBtn = form.querySelector('[type=submit]')

form.addEventListener('submit', function(e){
  let player = {}
  const formInfo = e.target
  player["number"] = formInfo.number.value
  player["name"] = formInfo.name.value 
  player["nickname"] = formInfo.nickname.value
  player["photo"] = formInfo.photo.value
  player["likes"] = 0
  renderPlayer(player)
  e.preventDefault()
  formInfo.reset()
})
//prevent default event on the form so it don't make a request
  //submit event
//use renderPlayer function to add a player to bottom of page
  // need players in the same format


/***** Deliverable 3 *****/
const playerParentCont = document.querySelector('.player-container')

playerParentCont.addEventListener('click', function(e){

  if (e.target.matches('.like-button')) {
    const playerParent = e.target.parentNode
    let likes = playerParent.querySelector('.likes')
    let addLikes = parseInt(likes.textContent)
    likes.textContent = `${addLikes + 1} likes`

  }
})