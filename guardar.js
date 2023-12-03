function guardar(){
    Nombre=document.getElementById("usuario").value
    Correo=document.getElementById("email").value
    Contrasena=document.getElementById("contrasena").value

    db.collection("Usuarios").add({
        Nombre: Nombre,
        Correo: Correo,
        Contraseña: Contrasena
    })
    .then((docRef) => {
        alert("registro exitoso")
        setTimeout(function() {
            window.location.href = "inicio.html"; // Cambia esto por la URL adecuada
        }, 1000);
    })
    .catch((error) => {
        alert("registro fallido")
    });

}

// Supongamos que tienes acceso a tu base de datos de alguna manera (Firebase, Ajax, etc.)
// Esta función verifica las credenciales ingresadas por el usuario
function iniciarSesion() {
    Nombreinicio=document.getElementById("usuarioinicio").value
    Contrasenainicio=document.getElementById("contrasenainicio")
    
    db.collection("Usuarios").get({
        Nombre:Nombreinicio,
        Contraseña:Contrasenainicio
    })
    .then((docRef) => {
        alert("inicio exitoso")
        setTimeout(function() {
            window.location.href = "datos.html"; // Cambia esto por la URL adecuada
        }, 1000);
    })
    .catch((error) => {
        alert("inicio fallido,intente de nuevo")
    });
}

function guardar_historial(){
    Usuario=document.getElementById("usuarioinicio").value
    
}