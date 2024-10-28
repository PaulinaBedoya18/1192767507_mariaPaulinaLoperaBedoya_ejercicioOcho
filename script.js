function iniciarSesion() {
    const usuarioCorrecto = "admin";
    const contrasenaCorrecta = "1234";
    let intentos = 0;

    while (intentos < 3) {
        let usuario = prompt("Ingrese usuario: ");
        let contrasena = prompt("Ingrese contraseña: ");

        if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
            console.log("Inicio de sesión exitoso.");
            calcularSalarioVariosEmpleados();
            return;
        } else {
            intentos++;
            alert("Usuario o contraseña incorrectos. Intento " + intentos + " de 3.");
        }
    }
    alert("Completaste 3 intentos fallidos. El sistema se cerrará.");
}

function calcularSalarioVariosEmpleados() {
    let continuar = true; 

    while (continuar) { 
        let horasTrabajadas = capturarHorasTrabajo(); 
        let salario = calcularSalario(horasTrabajadas); 
        mostrarSalario(salario); 

        continuar = confirm("¿Desea calcular el salario de otro empleado?"); 
    }
}