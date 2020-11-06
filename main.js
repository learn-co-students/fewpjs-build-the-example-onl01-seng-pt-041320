// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';
let artLikes = document.querySelectorAll('.like-glyph');

function likeHappens(e){ 
  let heart = e.target;
  heart.innerText = EMPTY_HEART;
  mimicServerCall()
    .then( function(){
      heart.innerHTML = FULL_HEART;
      heart.className = 'activated-heart'
    })//end of the then
    .catch( function(reject){
      let myDiv = document.getElementById('modal');
      let divText = document.getElementById('modal-message');
      myDiv.classList.value = "";
      divText.innerText = reject
      setTimeout(function() {
        myDiv.classList.value = "hidden";
      }, 5000); 
    });//end of the catch
}//end of like happens
      

  for (let h of artLikes) {
    h.addEventListener('click', likeHappens)
    if (h.innerText === FULL_HEART){
      h.className = 'activated-heart'
    } else {
      h.innerText === EMPTY_HEART
      h.className = ''
    }
  }
  
  


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall() {
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
