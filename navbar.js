import axios from "axios";

let menu_bar = document.getElementById('menu');
let bars = document.getElementById('ham');

bars.addEventListener('click',()=>{
  if(menu_bar.style.display == "none"){
       menu_bar.style.display ="block"
  }else{
    menu_bar.style.display = "none"
  }
  document.getElementById('hamburg').addEventListener('click',()=>{
    menu_bar.style.display = "none";
  })
})

// Initialize Google Sign-In function
function initializeGoogleSignIn() {
  gapi.load('auth2', function() {
      var auth2 = gapi.auth2.init({
          client_id: '21426818161-71m688js47nr4qpeolrvepapos5scs9l.apps.googleusercontent.com' // Replace with your actual client ID
      });

      auth2.attachClickHandler('google-signin-button', {}, onSignIn, onFailure);
  });
}

// Callback function for successful sign-in
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId());
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
  // Additional actions related to the signed-in user can be performed here
}

// Callback function for failed sign-in
function onFailure(error) {
  console.log('Sign-in failed: ' + error);
  // Handle sign-in failure
}

// Call initializeGoogleSignIn when the DOM content is loaded
document.addEventListener('DOMContentLoaded', initializeGoogleSignIn);
initializeGoogleSignIn()

// Set cookie with SameSite=None and Secure attributes
document.cookie = 'cookieName=cookieValue; SameSite=None; Secure';


var API_URL = 'https://ipgeolocation.abstractapi.com/v1/?api_key=fcb23d19fdc048528de3d386e0300aa1&ip_address=2401:4900:1c37:b691:d491:9d98:2dd3:53a0'
const loc_api = document.getElementById('location');
const loc2 = document.getElementById('btn2');

var bd = document.querySelectorAll('body');       
        
const rootElement = document.getElementById('root');                
loc_api.addEventListener('click',()=>{
  
    rootElement.style.display = (rootElement.style.display === "none") ? "block" : "none";     
})



loc2.addEventListener('click',()=>{
  function toggledown(){
    axios.get(API_URL).then(resp=>{
loc_api.textContent = resp.data.city
}).catch(error=>{
 console.log(error);
})
}
toggledown();
rootElement.style.display = "none";
});




const inp1 = document.getElementById('inp');

inp1.addEventListener('input',()=>{
    axios.get(API_URL)
    .then(response =>{
     if(inp1.value == response.data.city){
       document.getElementById('scr').textContent = "";
       loc_api.textContent = response.data.city;
     }else{
       document.getElementById('scr').textContent = "Enter correct location!"
     }
    }).catch(error =>{
      console.log(error);
    })
})
 