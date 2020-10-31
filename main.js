// Defining text characters for the empty and full hearts for you to use later.

//need to add mimicServerCall

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


const modal = document.getElementById("modal");
modal.setAttribute("class", "hidden")
const hideError = function () {modal.setAttribute("class", "hidden")}

let likeHeart = document.querySelectorAll(".like-glyph")


likeHeart.forEach(like => like.addEventListener("click", likeEvent));

function likeEvent() {
  if (event.target.innerHTML === EMPTY_HEART) {
  event.target.innerHTML = FULL_HEART;
  event.target.setAttribute("class", "activated-heart");
  } else {
  event.target.innerHTML = EMPTY_HEART;
  event.target.removeAttribute("class");
  modal.removeAttribute("class");
  setTimeout(hideError, 5000);
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
