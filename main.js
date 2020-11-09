// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorHeader = document.getElementById("modal")
const heartBox = document.getElementsByClassName("like-glyph")
const p = document.createElement("p")

document.addEventListener("DOMContentLoaded", function() {
  manyHearts()
})

function manyHearts() {
  Object.values(heartBox).forEach(heart => {
    heart.addEventListener("click", function(event) {
      mimicServerCall()
      .then(function(object) {
        redHeart(event)
      })
      .catch(function(error) {
        errorHeader.className = ""
        p.innerHTML = error
        errorHeader.append(p)
        setTimeout(function() {
          errorHeader.className = "hidden";
        }, 5000);
      })
    })
  })
}

function redHeart(event) {
  if (event.target.innerText == EMPTY_HEART) {
    event.target.innerHTML = FULL_HEART
    event.target.classList.toggle("activated-heart")
  } else {
    event.target.innerHTML = EMPTY_HEART
    event.target.classList.toggle("activated-heart")
  }
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
