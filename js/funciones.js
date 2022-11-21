const resp = document.getElementById("resultado");
const botton = document.getElementById("btnEnviar");
botton.onclick = function(){
    let nomNum1 = prompt("Ingrese el primer numero");
    let nomNum2 = prompt("Ingrese el numero");
    let suma = (nomNum1 + nomNum2);

resultado.innerText = suma;
}



