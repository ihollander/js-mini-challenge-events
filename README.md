# JS Mini Challenge: Event Handling

## Instructions

Fork this repo, then run `git clone` to download it locally. Then `cd` into the downloaded directory and open it in your text editor with `code .`.

## Submitting

When you’re finished, run the following commands in your terminal to submit:

```
git add .
git commit -m 'Done'
git push
```

To get feedback on your code, make a [pull request from your forked repo](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork). If you worked with a partner, you can tag your partner on the pull request.

## Assignment

In this challenge, we're going to keep working on Ian's Liverpool fan page and give our users the ability to:

- Toggle the header color
- Add new players
- 'Like' a player 

We've got some starter code already written for us (this should look somewhat familiar from the previous challenge). Your job is to add some additional functionality to make our app more dynamic by handling user interactions.

There's a section in this Readme file for your notes on each deliverable. As you go through the deliverables, write down some notes in this file on how you solved each problem. It'll help reinforce what you learned and give you a head start next time you see a similar problem.

## Deliverable 1: Toggle Header

**When a user clicks the header**, the color should toggle between black and red. 

To get you started, there's a helper function already written takes in an element and toggles its color that you can use. You can try it out in your console:

```js
toggleColor(document.querySelector("h1#header"))
```

Try calling it a few times to see the color switch back and forth. 

Once you have it working in the console, write an event listener that will use this helper function to change the color of the header when a user clicks on it.

**YOUR NOTES**
```
First, I need to find the header; life is also easier when I set it to a variable (header). Next, I'll write a handler function for toggleColor; this modularizes the code when you call it in addEventListener. Finally, I'll write a line for adding the event listener for a click action. 
```

## Deliverable 2: Create Player

Our app already has a few players in it (check out the starter code in `index.js` to see how the initial render is set up), but we want our users to have the ability to add additional players by entering the player's details in the `form#new-player-form`.

**When a user submits the form**, the new player should be displayed on the bottom of the page (you can use the `renderPlayer` helper function from the starter code if you like). The data won't persist (when you refresh the page, the new player won't show up) - we'll see how to fix this later in the mod. For now, focus on getting the player on the page when the form is submitted!

Some things to keep in mind:
- If you see the page refresh, consider adding some code to *prevent* the *default* behavior of a form submitting.
- Make sure you're using the form *submit* event, not the *click* event.
- You can use the `name` attribute of the input elements as an easy way to reference the input fields within the form. For example: `document.querySelector("#new-player-form").nickname` will look inside the `form#new-player-form` and return the `input` element with the `name='nickname'` attribute
- Once you have access to an input field, you still need to retrieve its *value* to see what the user entered in the form!

**YOUR NOTES**
```
Fist, I need to find and set the form to a variable. Next, I need to make an event handler for submitting a form; this prevents default behavior (so there's no refresh/post), creates a player object from the captured data (plus some amount of likes I made up), calls on renderPlayer and feeds it the new player, and clears the inputs for the next player the user add.
```

## Deliverable 3: Like Button

**When a user clicks the like button for a player**, that player's likes should increase by 1. 

You can decide if you'd like to use *event delegation* to handle this, or if you'd like to attach *individual event listeners* to each like button. Regardless of the approach you take, the like button feature should work for all players (including new players that get added when a user fills out the form).

**YOUR NOTES**
```
I want to use event delecation for this one. To start, I need to add an event listener to playerContainer. In it, I need to set a conditional statement with a condition of the event target matching an element with the "like-button" class. If upon click the condition is met, it adds variables for the button, the playerDiv it's for (using the .closest technique from the lecture videos), the ptag the likes count lives in, and the actual content in said ptag, with the content replaced to an int of just the likes. Finally, it updates the ptag with the correct content (likes count + 1 + " likes").
```
