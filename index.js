/***** Beginning of Starter Code ****/
const goalList = document.querySelector("#goals")
const header = document.querySelector('#header')
const likes = document.querySelector('.likes')
const likeBtn = document.querySelector('.like-button')
const playerCont = document.querySelector('.player')
const newGoal =document.querySelector('#new-goal-form')
// console.log(likes, likeBtn)
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
const toggleColor = (element) => {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
  // console.log(element)
}

header.addEventListener('click', e => {
  if (e.target.textContent === header.textContent) {
    toggleColor(header)
  }
})


/***** Deliverable 2 *****/
let like = 0+1

playerCont.addEventListener('click', e => {
  if (e.target.matches('button')) {
    likes.textContent = `${like++} Likes`
  }
})


/***** Deliverable 3 *****/

newGoal.addEventListener('submit', e => {
  e.preventDefault()
  const description = newGoal.description
  const link = newGoal.link
  
  
})
