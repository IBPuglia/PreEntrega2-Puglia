// Objeto Usuario
function Usuario(nombres, contraseñas) {
    this.nombres = nombres;
    this.contraseñas = contraseñas;

    this.login = function() {
        let cLogin = false;
        for (let i = 1; i <= 3; i++) {
            let usuario = prompt("Ingrese su nombre de usuario (usuario = admin)");
            usuario = usuario.toLowerCase();
            let contraseña = prompt("Ingrese su contraseña (contraseña = 1234)");
            for (let j = 0; j < this.nombres.length; j++) {
                if (usuario == this.nombres[j] && contraseña == this.contraseñas[j]) {
                    cLogin = true;
                    alert("Bienvenido, " + usuario);
                    return cLogin;
                }
            }
            alert("Usuario o contraseña incorrectos. Le quedan " + (3 - i) + " intento/s.");
            cLogin = false;
        }
        return cLogin;
    };

    this.register = function() {
        console.table(this.contraseñas);
        console.table(this.nombres);
        let nUsuario = "";
        let nContra = "";
        alert("No se ha iniciado sesión. Se creará una cuenta nueva.");
        nUsuario = prompt("Ingrese su nuevo nombre de usuario: ");
        nUsuario = nUsuario.toLowerCase();
        while (this.nombres.includes(nUsuario) || nUsuario == "") {
            if (this.nombres.includes(nUsuario)) {
                nUsuario = prompt("El nombre de usuario ya existe, ingrese un nuevo usuario: ");
                nUsuario = nUsuario.toLowerCase();
                continue;
            }
            if (nUsuario == "") {
                nUsuario = prompt("El campo no puede estar vacío, ingrese un nuevo usuario: ");
                nUsuario = nUsuario.toLowerCase();
                continue;
            }
        }
        nContra = prompt("Ingrese su nueva contraseña. Debe tener al menos 6 dígitos.");
        nContra = nContra.trim();
        while (nContra.length < 6) {
            nContra = prompt("La contraseña debe tener al menos 6 dígitos. Reingrese la contraseña.");
            nContra = nContra.trim();
        }
        this.nombres.push(nUsuario);
        this.contraseñas.push(nContra);
        console.table(this.contraseñas);
        console.table(this.nombres);
        alert("Bienvenido, " + nUsuario);
    };
}

// Función Calculo

function calculo(){
    let dolarTHoy = 1386.45
    while (true){
        let valorProducto = prompt("Ingrese el valor en dólares del producto a comprar: ")
        valorProducto = parseFloat(valorProducto)
        if(Number.isNaN(valorProducto)){
            alert("Error, ingreso un dato incorrecto. Por favor intente nuevamente")
        }
        else{
            alert("El valor de su producto en pesos es: " + (dolarTHoy*valorProducto))
            break;
        }
    }
}

// Main
function main() {
    let usuarios = new Usuario(["admin"], ["1234"]);
    alert("¡Bienvenido a Calcula2! Aquí podrá calcular el precio de su compra internacional.");

    let crearCuenta = confirm("Si posee una cuenta, presione Aceptar para iniciar sesión. Si no, Presione Cancelar para crear una cuenta.");
    if (crearCuenta) {
        cLog = usuarios.login();
    } 
    if(!crearCuenta || !cLog) {
        usuarios.register();
    }

    calculo();
}

main();