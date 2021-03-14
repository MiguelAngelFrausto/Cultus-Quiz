//obtener elementos

const btnSignUp = document.querySelector("#formulario__register");

btnSignUp.addEventListener('submit', (e) => {

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    e.preventDefault();

    console.log(email, password);

    auth.createUserWithEmailAndPassword(email, password).then(userCredential =>{
        console.log('Registrado!');
    });

});







