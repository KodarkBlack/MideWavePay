// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbJZbCDsbvn5U1jHgVtzWnhg3E_9j6ja8",
  authDomain: "midwave-5d8d9.firebaseapp.com",
  databaseURL: "https://midwave-5d8d9-default-rtdb.firebaseio.com",
  projectId: "midwave-5d8d9",
  storageBucket: "midwave-5d8d9.appspot.com",
  messagingSenderId: "703752618741",
  appId: "1:703752618741:web:2a563334bed9e5ec55bbbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

//   getting all the form object

let name = document.getElementById('name')
let email = document.getElementById('email')
let password = document.getElementById('password')

window.register = function(e){
  e.preventDefault();

  let obj = {
      name: name.value,
      email: email.value,
      password: password.value
  };

  createUserWithEmailAndPassword(auth, obj.email, obj.password)
  .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("Account created successfully");
      document.querySelector(".alert").style.display = "block";
      setTimeout(() => (
          document.querySelector('.alert').style.display = 'none'
      ), 3000);
  })
  .catch((error) => {
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
  });
}


// window.register = function(e){
//     e.preventDefault()
  
//     let obj = {
//       name: name.value,
//       email: email.value,
//       password: password.value
//     }
//     createUserWithEmailAndPassword(auth, obj.email, obj.password)
  
//     .then(function(success){

//       alert("Account created successfully")

  
//       document.querySelector(".alert").style.display = "block"
  
//       setTimeout(() => (
//           document.querySelector('.alert').style.display = 'none'
//     ),3000)
  
//     })
    
  
//     .catch(function(error){
//       alert("error" + error.message)
//     })
  
//     console.log(obj)
    
// }
  
  