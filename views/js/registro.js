let bandera = 0;
let tamaño = 0;
const inputPassword = document.getElementById('contrasena'); // caja donde pondremos la contraseña.
const lowUpperCase = document.querySelector(".low-upper-case i"); //se escoge el elemento "i" dentro de los que tengan la clase "low-upper-case"
const eightChar = document.querySelector(".eight-character i"); //se escoge el elemento "i" dentro de los que tengan la clase "eight-character"
const btonRegistrar = document.getElementById('btnRegistrar');
const ConfirmarPassword = document.querySelector('low-upper-case i');

const number = document.querySelector(".one-number i");//se escoge el elemento "i" dentro de los que tengan la clase "one-number"

const specialChar = document.querySelector(".one-special-char i");//se escoge el elemento "i" dentro de los que tengan la clase "one-special-char"

//const contrasenaInput = document.getElementById("contrasena");
const confirmarContrasenaInput = document.getElementById("confirm-contrasena");

/* Valida en primer lugar si hay mayusculas (cualquier cantidad) y Minuúsculas (cualquier Cantidad)
 mezcladas, para esto se usa la expresión regular "[A-Z]*.[a-z]|[a-z].*[A-Z]"
*/
function Validar(){
    bandera=0;
    if (inputPassword.value.length >= 6) {
        bandera++;
        eightChar.classList.remove('fa-circle');
        eightChar.classList.add('fa-check');
    } else {
        eightChar.classList.add('fa-circle');
        eightChar.classList.remove('fa-check');
    }
    if (inputPassword.value.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        bandera++;
        lowUpperCase.classList.remove('fa-circle');
        lowUpperCase.classList.add('fa-check');
    } else {
        lowUpperCase.classList.add('fa-circle');
        lowUpperCase.classList.remove('fa-check');
    }
    if (inputPassword.value.match(/(\d)/)) {
        bandera++;
        number.classList.remove('fa-circle');
        number.classList.add('fa-check');
    } else {
        number.classList.add('fa-circle');
        number.classList.remove('fa-check');
    }
    if (inputPassword.value.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
        bandera++;
        specialChar.classList.remove('fa-circle');
        specialChar.classList.add('fa-check');
    } else {
        specialChar.classList.add('fa-circle');
        specialChar.classList.remove('fa-check');
    }
    if(inputPassword.value == confirmarContrasenaInput.value && bandera>=4){
        btonRegistrar.removeAttribute('disabled');
    }

}

function Registrar(){
    // resto del código
    if (inputPassword.value == confirmarContrasenaInput.value && bandera>=4){
        console.log("VERDADERO")
    } else {
        alert("La contraseña son diferentes, porfavor retifica");
    }
    if (inputPassword.value.length >= 6) {
        return true;
    } else {
        alert("Tiene que tener por lo menos 6 digitos");
    }
    if (inputPassword.value.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
        return true;
    } else {
        alert("Tiene que tener por lo menos un caracter en especial");
    }
    if (inputPassword.value.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        return true;
    } else {
        alert("Tiene que tener por lo menos un caracter");
    }
    if (inputPassword.value.match(/(\d)/)) {
        return true;
    } else {
        alert("Tiene que tener por lo menos un numero");
    }
    
}

