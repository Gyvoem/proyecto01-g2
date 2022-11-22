/* Ejercicio 1 */
const btn_sueldo = document.getElementById('btn_sueldo');
const p_sueldo = document.getElementById('p_sueldo');

btn_sueldo.addEventListener('click', sueldo);

function sueldo(){
    const nombre = document.getElementById('nombre').value;
    const sueldo = parseInt(document.getElementById('sueldo').value);
    const hijos = parseInt(document.getElementById('hijos').value);
    let bonificacion = 0;

    if(hijos>0){
        bonificacion = sueldo * 7/ 100;
        let sueldo_f = sueldo+bonificacion;
        p_sueldo.innerText =`El trabajador ${nombre} recibirá una bonificación de S/${bonificacion} y un sueldo final de S/${sueldo_f}`;
    } else {
        p_sueldo.innerText =`El trabajador ${nombre} no tiene hijos, por lo que su sueldo se mantiene en S/${sueldo}`;
    }
}

/* Ejercicio 2 */
const btn_percent = document.getElementById('btn_percent');
const p_percent = document.getElementById('p_percent');

btn_percent.addEventListener('click', percent);

function percent(){
    const n1 = parseFloat(document.getElementById('n1').value);
        
    if(n1>500){
        let percent = n1*18/100;
        
        p_percent.innerText =`El 18% de ${n1} es ${percent}`;
    } else {
        
        p_percent.innerText =`No alcanzó el requisito`;
    }
}

/* Ejercicio 3 */
const btn_factorial = document.getElementById('btn_factorial');
const p_factorial = document.getElementById('p_factorial');

btn_factorial.addEventListener('click', factorial);


function factorial() {
    const n2 = parseInt(document.getElementById('n2').value);
    let factorial = 1;

    for(i=1; i<=n2; i++){
        factorial = factorial*i;
    }

    p_factorial.innerText =`${factorial}`;
    return false
}