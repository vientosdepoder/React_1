


function registrarse(){
    var nombre //Declaracion
    nombre = document.form_registro.nombre.value /* Inicializacion */
   
    var apellido = document.form_registro.apellido.value //Declarado e inicializado
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var confirma = document.getElementById("confirmar").value
    document.getElementById("Nombre_val").innerHTML=nombre
   document.getElementById("Apellido_val").innerHTML=apellido
   document.getElementById("Mail_val").innerHTML=email
    document.getElementById("password_val").innerHTML=password
    document.getElementById("confirm_password_val").innerHTML=confirma
    
   
   
}
