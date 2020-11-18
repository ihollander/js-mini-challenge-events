/***** Beginning of Starter Code ****/
const goalList = document.querySelector("#goals")

/*
renderGoal function 
- takes in a goal object { id, link, description}
- creates elements:
  <li data-id="{goal id}">
    <p>{goal description}</p>
    <a href="{goal link}" target="_blank">{goal link}</a>
  </li>
- appends to the goalList
*/ 
function renderGoal(goal) {
  const li = document.createElement("li")
  li.dataset.id = goal.id

  const p = document.createElement("p")
  p.textContent = goal.description

  const a = document.createElement("a")
  a.href = goal.link
  a.target = "_blank"
  a.textContent = goal.link
  
  li.append(p, a)

  goalList.append(li)
}

/*
renderPlayer function
- takes in a player object { name, nickname, photo, likes, goals }
- updates the DOM using the player info
- renders the goals using the renderGoal function
*/ 
function renderPlayer(player) {
  const img = document.querySelector(".player img")
  img.src = player.photo
  img.alt = player.name

  const name = document.querySelector(".player h2")
  name.textContent = player.name

  const nickname = document.querySelector(".player em")
  nickname.textContent = player.nickname

  const likes = document.querySelector(".player .likes")
  likes.innerHTML = `<span id="like-count">${player.likes}</span> Likes`

  player.goals.forEach(renderGoal)
}

// render the player from the data.js file
renderPlayer(player)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
function toggleColor() {
  if (event.target.style.color){
    if (event.target.style.color === "red") {
      event.target.style.color = "black"
    } else {
      event.target.style.color = "red"
    }
  } else {
    event.target.style.color = "red"
  }
}

const h1 = document.querySelector("#header")
h1.addEventListener("click", toggleColor)

/***** Deliverable 2 *****/

const playerClass = document.querySelector(".player")

playerClass.addEventListener("click", function(){
  const likeBtn = document.querySelector(".like-button")
  const likeCount = document.querySelector("#like-count")

  if (event.target === likeBtn) {
    likeCount.innerText = parseInt(likeCount.innerText) + 1
  }
})


/***** Deliverable 3 *****/

const goalForm = document.querySelector("#new-goal-form")


goalForm.addEventListener("submit", function(event) {
  event.preventDefault()
  const link = event.target.link.value
  const description = event.target.description.value
  const lastGoalId = goals.lastChild.dataset.id
  const id = parseInt(lastGoalId) + 1

  const goal = {
    id: id,
    link: link,
    description: description
  }

  renderGoal(goal)
  event.target.reset()
})
