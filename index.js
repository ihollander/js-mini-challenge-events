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

const element = document.querySelector("h1#header")

function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

element.addEventListener('click', function(){
  toggleColor(element)
})
/***** Deliverable 2 *****/

const like = document.querySelector('.like-button')

like.addEventListener('click',function(){
  const likesCount = document.querySelector('.likes')
  const likesValue = parseInt(likesCount.textContent.split(' ')[0]) + 1
  likesCount.textContent = `${likesValue} ${likesCount.textContent.split(' ')[1]}`
})
// note to future self, use better names please

/***** Deliverable 3 *****/

const newGoalForm = document.querySelector('#new-goal-form')

newGoalForm.addEventListener('submit', function(e){
  e.preventDefault()
  const goalObject = {
    //go into goals
    //then from the top get the last index in the array
    //take their id + 1
    id: player.goals[player.goals.length - 1].id  + 1,
    playerId: 1,
    link: e.target.link.value,
    description: e.target.description.value
  }
  renderGoal(goalObject)
})