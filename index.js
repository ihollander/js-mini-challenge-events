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

const header = document.querySelector("#header")

header.addEventListener("click", function() {
toggleColor(header)
})


/***** Deliverable 2 *****/

const likeButton = document.querySelector('.like-button')
const pLike = document.querySelector('.likes')



likeButton.addEventListener('click', function(){
  const likes = parseInt(pLike.textContent)
  pLike.textContent = likes + 1 + "Likes"
})





/***** Deliverable 3 *****/



const form = document.querySelector('#new-goal-form')
const goalLinkForm = form.querySelector('#goal-link')
const goalDescription = form.querySelector('#goal-description')

form.addEventListener('submit', function(event){
  event.preventDefault()

  const link = event.target.link.value
  const description = event.target.description.value
  
  const goalId = document.querySelector('#goals').lastChild.dataset.id
  const newId = parseInt(goalId) + 1

  const newGoal = {
    id: newId,
    link: link,
    description: description
  }
  
  renderGoal(newGoal)
})