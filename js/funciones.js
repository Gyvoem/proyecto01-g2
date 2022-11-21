

/* 
Generales
    -> Todo linea de codigo o instruccion (bloque) termina ; (punto y coma)
    -> JS tiene funciones integradas -> alert, prompt, confirm
    -> JS tiene librerias integradas -> Math  (Conjunto de funciones matematicas)
    -> JS Usa concepto de programacion Orientada a Objetos (Atributos, Metodos)

Operadores Matematicos
    +   ->  Suma -> Concatenacion (Unir cadenas de texto)
    -   ->  resta
    *   ->  Producto
    /   ->  División
    **  ->  Potencia
    %   ->  Residuo de una division entera 

    DIV decimal -> 10/3 = 3.333     DIV Entera -> 10/3 = 3 residuo 1 (10%3)

Declarar variables: var / let / const
    El signo = "igual" -> asignar un valor a una variable
    Las variables se declaran una sola vez

*/

/* Concatenando la variable producto a un mensaje de texto */
alert("El resultado es: producto");
alert(producto);
alert("El resultado es: " + producto); // El resultado es 15000
alert(`El resultado es: ${producto}`); // El resultado es 15000

/* Ejemplo de manipulacion del DOM -> Document Object Model */

// Capturar el elemento p del DOM cuyo Id es resultado1
// document -> al objeto document -> Raiz del DOM
// .getElementById -> Es una funcion de document = Método
// captura el elemento del DOM cuyo ID se indica entre parentesis
const pResultado1 = document.getElementById("resultado1");
const pResultado2 = document.getElementById("resultado2");
const pResultado3 = document.getElementById("resultado3");
const pResultado4 = document.getElementById("resultado4");

/* Funcionalidad a un button */

const btnEnviar = document.getElementById("btnEnviar");

let num1 = 120;
let num2 = 125;
let producto = num1 * num2;

btnEnviar.onclick = function(){
    
    let producto = num1 ** 2;
    pResultado1.innerText = "El resultado es producto";
    pResultado2.innerText = "Aqui con toFix(2)" + producto.toFixed(2);
    pResultado3.innerText = "El resultado con Math.round() " + Math.round(producto);
    pResultado4.innerText = `El resultado es ${producto}`;
}





