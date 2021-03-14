//obtener elementos

const btnSignUp = document.querySelector("#formulario__register");

btnSignUp.addEventListener('submit', (e) => {

    const nombre = document.querySelector("#name").value;
    const correo = document.querySelector("#email").value;
    const contrasena = document.querySelector("#password").value;
    e.preventDefault();

    console.log(correo, contrasena);

    auth.createUserWithEmailAndPassword(correo, contrasena).then(userCredential =>{
        console.log('Registrado!');
        
        var uID = firebase.auth().currentUser;

        var name, uid, mail;
        if (uID != null){
        //    mail = uID.email;
            uid = uID.uid;

            console.log(uid);
        }

        console.log(uID);

    });

});







