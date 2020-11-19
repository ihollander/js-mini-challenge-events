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
const header = document.querySelector("h1#header");
header.addEventListener("mouseover", function(e) {
  e.target.style.cursor = "pointer";
}) 

header.addEventListener("click", function(e) {
  toggleColor(header);
})

/***** Deliverable 2 *****/
const form = document.querySelector("#new-player-form");

form.addEventListener("click", function(e) {
  e.preventDefault();

  const playerNum = form.number.value;
  const playerName = form.name.value;
  const playerNickName = form.nickname.value;
  const playerPhoto = form.photo.value;

  const newPlayer = {number: playerNum, name: playerName, nickname: playerNickName, photo: playerPhoto, likes: 0};

  renderPlayer(newPlayer);
});

/***** Deliverable 3 *****/

function addLike(){
  const likeBtn = document.querySelectorAll(".like-button");
  const array = Array.from(likeBtn);

  array.forEach(function(like) {
    like.addEventListener("click", function(e) {
      let numOfLikes = e.target.parentElement.querySelectorAll(".likes")[0].innerHTML;
      numOfLikes.replace("likes ", "")
      numOfLikes = parseInt(numOfLikes, 10)
      e.target.parentElement.querySelectorAll(".likes")[0].innerHTML = (numOfLikes + 1)
    })
  })
}