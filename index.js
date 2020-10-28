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

newPlayerForm.addEventListener("submit", function(event) {
  const newPlayer = getPlayer();
  renderPlayer(newPlayer);
  event.preventDefault();
});

/***** Deliverable 3 *****/
const likeButtons = document.querySelectorAll("button.like-button");
likeButtons.forEach(addLike);

function addLike(button) {
  let likeCount = button.parentElement.children[2].innerHTML.replace(" likes","");
  likeCount = parseInt(likeCount);
  button.addEventListener("click", function() {
    likeCount++;
    button.parentElement.children[2].innerText = `${likeCount} likes`
    
  });
}
