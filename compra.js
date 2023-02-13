
alert("Ingrese la opcion del producto que desea llevar, para salir ingrese 0")
let seleccionarProductos = Number(prompt("1-buzo $5000 2-remera $3500 3-jean $12000 4-Zapatillas $25000 "))
let seleccionarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
    return cant * precio
}


while (seleccionarProductos != 0) {
    switch (seleccionarProductos) {
        case 1:
            seleccionarCantidad = Number(prompt("el producto seleccionado es buzo, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 5000)
            break;
        case 2:
            seleccionarCantidad = Number(prompt("el producto seleccionado es remera, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 3500)
            break;
        case 3:
            seleccionarCantidad = Number(prompt("el producto seleccionado es jean, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 12000)
            break;
        case 4:
            seleccionarCantidad = Number(prompt("el producto seleccionado es Zapatillas, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 25000)
            break;

        default:
            break;
    }
    seleccionarProductos = Number(prompt("1-buzo $5000 2-remera $3500 3-jean $12000 4-Zapatillas $25000 "))
}

alert("el total de la compra es de: " + total)


const envio = () => {
    if (total >= 15000) {
        alert("El envio es gratuito")
    } else {
        total += 1000
        alert("el costo de envio es de 1000, el total es: " + total)
    }
}

const metodoDePago = () => {}
    let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo")
    if (metodo == "tarjeta") {
        total *= 1.1
        console.log(total);
    } else if (metodo == "efectivo") {
        total -= 1000
        alert("tenes un descuento de 1000, el total es:" + total)
    }

