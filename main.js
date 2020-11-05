// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likes = document.querySelectorAll(".like");

//Changes color of heart and mimics a server request

function heartchanger(event){
  console.log(FULL_HEART);
  //event.target.innerHTML = FULL_HEART;
  if(event.target.innerHTML == EMPTY_HEART){
    mimicServerCall()
    .catch((error) => {
    modal.classList.remove("hidden");
    document.querySelector("#modal-message").innerHTML = error;
    setTimeout(function(){
      modal.classList.add("hidden")
    }, 5000)
  })
    event.target.innerHTML = FULL_HEART;
    event.target.style.color = "red";
  } else {
    event.target.innerHTML = EMPTY_HEART;
  }
}

//Iterate over heart elements

for(let el of likes){
  el.addEventListener("click", heartchanger);
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
