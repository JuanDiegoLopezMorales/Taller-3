function gymSubscription() {
    
    const suscripciónmensual = 65;
    const suscripcióntrimestral = 180; // 3 meses
    const suscripciónanual = 650; // 12 meses

    while (true) {
        
        let edad = prompt("Ingrese su edad:");
        edad = parseInt(edad);

    
        if (edad < 18) {
            console.log("al ser menor de edad no es posible su suscripción.")
            else console.log("puede suscribirse al gimnasio";
            continue;
        }

     
        let planquedesea = prompt("Ingrese el tipo de plan de suscripción (mensual, trimestral, anual):").toLowerCase();

        let totalCost = 0;
        let installments = 1;

        switch (planquedesea) {
            case "mensual":
                Costototal = suscripciónmensual;
                break;
            case "trimestral":
                installments = prompt("Ingrese el número de cuotas (1-3):");
                installments = parseInt(installments);
                totalCost = suscripcióntrimestral / installments;
                break;
            case "anual":
                installments = prompt("Ingrese el número de cuotas (1-12):");
                installments = parseInt(installments);
                totalCost = suscripciónanual / installments;
                break;
            default:
                console.log("Tipo de plan no válido. Inténtelo de nuevo.");
                continue;
        }

        console.log("Esta es su sucripción y el costo:");
        console.log("Plan deseado:", planquedesea);
        console.log("Número de cuotas:", installments);
        console.log("Costo por cuota:", totalCost.toFixed(2));

      
        let exit = prompt("Presione 's' para salir del programa o cualquier otra tecla para continuar:").toLowerCase();
        if (exit === "s") {
            break;
        }
    }


}
gymSubscription();
