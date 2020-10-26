// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.getElementById("modal");
const hearts = document.getElementsByClassName("like-glyph");

for (const heart of hearts)
{
  heart.addEventListener("click", function ()
  {
    if (heart.innerText === FULL_HEART)
    {
      heart.classList.remove("activated-heart");
      heart.innerText = EMPTY_HEART;
    }
    else
    {
      serverRequest(heart);
    }
  });
}

function serverRequest(heart)
{
  mimicServerCall()
  .then(() => 
  {
    toggleHeart(heart);
  })
  .catch(error => handleError(error));
}

function toggleHeart(heart)
{
  heart.classList.add("activated-heart");
  heart.innerText = FULL_HEART;
}

function handleError(error)
{
  let modal = document.getElementById("modal-message")

  modal.innerText = error;
  modal.classList.remove("hidden");
  setTimeout(hideError, 5000);
}

function hideError()
{
  errorModal.classList.add("hidden");
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
