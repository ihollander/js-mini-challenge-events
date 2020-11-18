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
const header = document.querySelector("#header")

header.addEventListener("click", function () {
  toggleColor(header)
})

function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

/***** Deliverable 2 *****/

const likeBtn = document.querySelector(".like-button")
const likes = document.querySelector(".likes")


function increaseLikes() {
  const newLikes = parseInt(likes.textContent) + 1
  likes.textContent = `${newLikes} Likes`
}


likeBtn.addEventListener("click", increaseLikes)


/***** Deliverable 3 *****/

// create variable for form, link and description
const form = document.querySelector("#new-goal-form")



// const goalId = player.goals.length + 1
// haha i thought i was gonna be all clever with player.goals.length + 1 as the id -- but the input data doesn't persist. Thus all my new links would have a goal id of 3 lolol. back to the drawing board!

const ul = document.querySelector("ul")
const goalId = ul.children.length +1
// boo this didn't work either. All of my new data-ids are 3.... why is that?
  

// will need event listener on form
form.addEventListener("submit", function (e) {
  e.preventDefault()

  // will need newGoal with attributes
// pass newGoal into renderGoal

  const link = e.target["link"].value
  const desc = e.target["description"].value

  const newGoal = {
    id: goalId,
    link: link,
    description: desc
  }

  renderGoal(newGoal)

  e.target.reset()
})

