// Your JavaScript code goes here!
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal = document.getElementById("modal");
modal.classList.add("hidden");


function hideModal() {
  modal.classList.add("hidden");
};

function showModal(message) {
  modal.innerText = message;
  modal.classList.remove("hidden");
}

function heartListener() {
  //selecting all hearts ad HTML collection
  const heart = document.getElementsByClassName("like-glyph");  

  //attaching a listener for each element of HTML collection and toggling hearts when clicked
  for (element of heart){
    element.addEventListener('click', actionsFunction);
  }
}
  // steps that happen when heart is clicked
  function actionsFunction (event) {
    event.preventDefault();
    mimicServerCall()
    .then(response => {
      return response
    })
    .then(object => {
      toggleHeart(event);
    })
    .catch(function(object) {
      console.log(object);
      showModal(object);
      setTimeout(hideModal, 5000);
    });
 
  }

  function toggleHeart (element) {
    if (element.target.innerHTML === EMPTY_HEART) {
      element.target.innerHTML = FULL_HEART;
      element.target.classList.add('activated-heart');
    } else {
      element.target.innerHTML = EMPTY_HEART;
    };
  };


heartListener();
hideModal();


//--
// Defining text characters for the empty and full hearts for you to use later.
// const EMPTY_HEART = '♡'
// const FULL_HEART = '♥'

// // don't need to add the class name(.activated-heart) if it's written like the code below
// //modal.className = ".hidden"
// // Your JavaScript code goes here!

// // loads the DOM
// document.addEventListener("DOMContentLoaded", () => {
//   const modal = document.querySelector('#modal')
// // const hearts = document.querySelectorAll('like-glyph')
//    const hearts = document.getElementsByClassName('like-glyph')
//    likePost(hearts);
//    // have a collection of hearts 
//    // add an event listener to each heart


// const likePost = (hearts) => {
//   for (const heart of hearts) {
//     heart.addEventListener("click", (e) => {
//        // debugger;
//        //make a server call
//        mimicServerCall() // returns a prommise
//        //then Do something with our response
//        .then(() => {
//        if (heart.innerHTML == EMPTY_HEART){
//            heart.innerHTML = FULL_HEART
//            heart.className = "activated-heart"
//        } else {
//            heart.innerHTML = EMPTY_HEART
//            heart.className = "Like-glyph"
//          }

//        })
//        .catch(error => {
//          modal.hidden = false
//          const modalMessage = document.querySelector("#modal-message")
//          modalMessage.innerText = error
//          setTimeout(() => {
//            modal.hidden = true
//          }, 5000)
//        })
//        // promises have then .then()
//        // 2 of them that we use - 1. takes the response, jnosity it. 2. takes the jsonified respinse and does something
//        // when is successful, change the heart
//        // if it's empty, make it full
//        // else if it's full, make it empty
//     })
//   }
// //  console.log(hearts)
// }

// --

// fetch()
// .then(resp => resp.json()) // Returns another promise
// .then(data => {
//  // do something with the data 
// })

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------
// mimicServerCall is a function that takes two parameters and returns a new promise
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    // debugger;
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

// Methods that belong to the promise class
// return new Promise (resolve, reject) => {}
// Promises are objects that have 2 parameters, resolve and reject