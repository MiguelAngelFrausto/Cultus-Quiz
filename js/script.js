document.getElementById("btn__registrarse").addEventListener("click", register);
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);

//Obterner valores para firebase 
const btnSignUp = document.querySelector("#formulario__register");
const btnSignIn = document.querySelector("#formulario__login");

window.addEventListener("resize", anchoPagina);

//Declaracion de variable
var contenedor_login_register = document.querySelector(".contenedor__login_register")
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var caja_trasera_login = document.querySelector(".caja__trasera_login");
var caja_trasera_register = document.querySelector(".caja__trasera_register");

// Funcion para el uso del ancho de la pagina
function anchoPagina(){

    if (window.innerWidth > 850){

        caja_trasera_login.style.display = "block"
        caja_trasera_register.style.display = "block";

    } else {

        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";

    }

}

anchoPagina();

// Formulario 
function iniciarSesion(){
    if(window.innerWidth > 850){
        
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block"
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity ="0";
    
    } else {

        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block"
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display ="none";

    }
    

}

function register(){

    if (window.innerWidth > 850){

        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none"
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity ="1";

    } else {

        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none"
        caja_trasera_register.style.opacity = "none";
        caja_trasera_login.style.opacity ="block";
        caja_trasera_login.style.opacity = "1";

    }

}


///firebase auth login 
btnSignUp.addEventListener('submit', (e) => {

    const nombre = document.querySelector("#name").value;
    const correo = document.querySelector("#email").value;
    const contrasena = document.querySelector("#password").value;
    e.preventDefault();

   // console.log(correo, contrasena);

    auth.createUserWithEmailAndPassword(correo, contrasena).then(userCredential =>{
       // console.log('Registrado!');
        
        var uID = firebase.auth().currentUser;

        var name, uid, mail;
        if (uID != null){
        //    mail = uID.email;
            uid = uID.uid;
            firebase.database().ref('Clientes/'+uid).set({
                nombre: nombre,
                correo: correo,
                uID: uid
            });

            console.log(uid);
        }

        console.log(uID);
        iniciarSesion();

    });


});


btnSignIn.addEventListener('submit', (e) => {
    const correo = document.querySelector("#mail").value;
    const contrasena = document.querySelector("#pass").value;
    e.preventDefault();


    auth.signInWithEmailAndPassword(correo, contrasena).then(userCredential =>{

        var uID = firebase.auth().currentUser;

        if (uID != null){
            return window.location.assign("/quiz.html");   
        }

    });



})
    