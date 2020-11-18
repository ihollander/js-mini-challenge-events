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
let header = document.querySelector("h1#header")

header.addEventListener("click", function() {
  toggleColor(header)
})

/***** Deliverable 2 *****/

const likeButton = document.querySelector('.like-button') // access 'like-button'
let likesShow = document.querySelector('.likes') //access <p class="likes"> parseInt, then likes++

// function addLike() {
//   const likesNum = parseInt(likesShow.textContent)
//   likesShow.textContent = likesNum ++ + "Likes"
// }

likeButton.addEventListener("click", function() {
  let likesNum = parseInt(likesShow.textContent)
  likesShow.textContent = likesNum + 1 + " Likes"
})

/***** Deliverable 3 *****/
//- Link: https://youtu.be/6rmUwoM-KQs?t=131
// - Description: What a hat trick! Amazing pace and dribbling for Salah's third goal of the game.

 const form = document.querySelector('#new-goal-form')
 const goalLinkForm = form.querySelector('#goal-link')
 const goalDescriptions = form.querySelector('#goal-description')

 form.addEventListener('submit', function(event) {
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