/***** Beginning of Starter Code ****/
const playerContainer = document.querySelector(".player-container")
const header = document.querySelector("h1#header");

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
    <p class="likes"><span>${player.likes}</span> likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
  // you also want your event listener here
  const button = playerDiv.querySelector('.like-button')
  button.addEventListener('click', e => {
    let likesSpan = playerDiv.querySelector('span')
    let likes = parseInt(likesSpan.textContent)
    likesSpan.textContent = likes + 1
  })
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

header.addEventListener('click', function(e) {
  toggleColor(header)
})

/***** Deliverable 2 *****/
const form = document.querySelector('form')
form.addEventListener('submit', e => {
  e.preventDefault();
  const newPlayerObj = {
    number: form.number.value,
    name: form.name.value,
    nickname: form.nickname.value,
    photo: form.photo.value,
    likes: 0
  }

  renderPlayer(newPlayerObj)
})
/***** Deliverable 3 *****/
// playerContainer.addEventListener('click', e => {
//   if (e.target.className == 'like-button') {
//     let likes = playerContainer.querySelectorAll('span')
//     // console.log(likes.);
//     // numLikes.style.color = "red"
//   }
// })
