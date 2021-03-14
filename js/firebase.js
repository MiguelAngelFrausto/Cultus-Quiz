//obtener elementos
const txtEmail = document.getElementById("email");
const password = document.getElementById("password");
const btnSignUp = document.getElementById("signUp");

btnSignUp.addEventListener('click', e => {

const email = txtEmail.value;
const pass = password.value;
const auth = firebase.auth();

const promise = auth.createUserWithEmailAndPassword(email, pass);
promise.catch(e => console.log(e.message));
print("Entraste");
});







