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
  likes.textContent = `${player.likes} Likes`

  player.goals.forEach(renderGoal)
}

// render the player from the data.js file
renderPlayer(player)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/

function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

const h1Header = document.querySelector("#header")
// h1Header.addEventListener("click", toggleColor)
// won't work because toggleColor expects an element but event listener will pass an event to the callback
h1Header.addEventListener("click", function () {
	toggleColor(h1Header)
})

/***** Deliverable 2 *****/

const likeBtn = document.querySelector(".like-button")

likeBtn.addEventListener("click", function() {
	const likesCnt = document.querySelector(".likes")
	player.likes++
	likesCnt.textContent = player.likes + " Likes"
})

/***** Deliverable 3 *****/

const newGoalForm = document.querySelector("#new-goal-form")

newGoalForm.addEventListener("submit", handleNewGoalFormSubmit)

let id = player.goals[player.goals.length -1].id + 1

function handleNewGoalFormSubmit(event) {
	event.preventDefault()

	const link = event.target.link.value
	const description = event.target.description.value

	const goal = {
		link: link,
		description: description,
		id: id++
	}

	renderGoal(goal)

	event.target.reset()
}