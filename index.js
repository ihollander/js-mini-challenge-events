/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container");

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div");

  // set attributes on the outer div
  playerDiv.className = "player";
  playerDiv.dataset.number = player.number;

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `;

  // append the element to the container
  playerContainer.append(playerDiv);
  
  // deliverable 3
  const likeButton = playerDiv.querySelector("button.like-button")
  likeButton.addEventListener("click", function() {
    const likePhrase = playerDiv.querySelector("p.likes").textContent
    let likeCount = parseInt(likePhrase.replace(" likes",""));
    likeCount++;
    playerDiv.querySelector("p.likes").textContent = `${likeCount} likes`
  })
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer);

/***** End of Starter Code ****/

/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black";
  } else {
    element.style.color = "red";
  }
}

const header = document.querySelector("#header");
header.addEventListener("click", function () {
  toggleColor(header);
});

/***** Deliverable 2 *****/
const newPlayerForm = document.querySelector("#new-player-form");

function getPlayer() {
  const player = {};
  player.number = newPlayerForm.number.value;
  player.name = newPlayerForm.name.value;
  player.nickname = newPlayerForm.nickname.value;
  player.photo = newPlayerForm.photo.value;
  player.likes = 0
  return player;
}

function submitNewPlayer(event) {
  event.preventDefault();
  const newPlayer = getPlayer();
  renderPlayer(newPlayer);
  newPlayerForm.reset()
}

newPlayerForm.addEventListener("submit", submitNewPlayer);

/***** Deliverable 3 *****/

// see lines 25-32