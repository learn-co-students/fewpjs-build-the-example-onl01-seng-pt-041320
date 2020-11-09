// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// Your JavaScript code goes here!
let likes = document.querySelectorAll(".like-glyph");
let glyphStates = {
  '♡' : '♥',
  '♥' : '♡'
};

let classStates = {
  "activated-heart" : "unactivated-heart",
  "unactivated-heart": "activated-heart"
};
  
function updateHeart(event) {
  let heart = event.target;
  mimicServerCall()
    .then(function() {
      alert("You notified the server!");
      heart.innerHTML = glyphStates[heart.innerHTML];
      heart.className = classStates[heart.className];
      })
    .catch(function(error) {
      alert("Something went wrong!");
      let errorClass = document.querySelector(".hidden")
      errorClass.className = "not-hidden"
      setTimeout(hideError, 5000)
      })
}


function hideError() {
  const errorElement = document.querySelector(".not-hidden")
    errorElement.className = "hidden"
  }


for (let glyph of likes) {
    glyph.addEventListener("click", updateHeart)
  }

  for (let glyph of likes) {
    glyph.className = "unactivated-heart"
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
