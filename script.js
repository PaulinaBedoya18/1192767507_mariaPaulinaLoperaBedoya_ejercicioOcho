function iniciarSesion() {
    const usuarioCorrecto = "admin";
    const contrasenaCorrecta = "1234";
    let intentos = 0;

    while (intentos < 3) {
        let usuario = prompt("Ingrese usuario: ");
        let contrasena = prompt("Ingrese contraseña: ");

        if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
            console.log("Inicio de sesión exitoso.");
            calcularSalarioEmpleados();
            return;
        } else {
            intentos++;
            alert("Usuario o contraseña incorrectos. Intento " + intentos + " de 3.");
        }
    }
    alert("Completaste 3 intentos fallidos. El sistema se cerrará.");
}

function calcularSalarioEmpleados() {
    let continuar = true;

    while (continuar) {
        let horasTrabajadas = capturarHorasTrabajo();
        let salario = calcularSalario(horasTrabajadas);
        mostrarSalario(salario);

        continuar = confirm("¿Desea calcular el salario de otro empleado?");
    }
}

function capturarHorasTrabajo() {
    let horas = prompt("Ingrese las horas trabajadas por el empleado: ");
    return parseInt(horas);
}

function calcularSalario(horasTrabajadas) {
    let salario;

    if (horasTrabajadas < 40) {
        salario = horasTrabajadas * 20000;
    } else if (horasTrabajadas <= 50) {
        salario = (40 * 20000) + ((horasTrabajadas - 40) * 25000);
    } else {
        salario = (40 * 20000) + (10 * 25000) + ((horasTrabajadas - 50) * 30000);
    }

    return salario;
}

function mostrarSalario(salario) {
    document.getElementById('resultado').innerText = "El salario del empleado es: $" + salario;
}