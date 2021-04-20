
function validar(){
    var usuario =document.getElementById("input-Usuario").value;
    var contra =document.getElementById("input-Contrasena").value;
    if(usuario =="admin" && contra =="12345"){
        alert("BIENVENIDO");
        location.href="http://localhost:5000";
    }
    else{
        alert("USUARIO O CONTRASEÑA iNCORRECTOS");
    }
};