/* Ejercicio 1 */
const btn_importe = document.getElementById('btn_importe');
const p_importe = document.getElementById('p_importe');

btn_importe.addEventListener('click', importe);

function importe(){
    const importe = parseFloat(document.getElementById('importe').value);

    if(importe>=150){
        let descuento = importe * 12 / 100;
        let importe_f = importe- descuento;
        
        p_importe.innerText =`Se le proporcionó un descuento del 12%, el monto a pagar es S/${importe_f}`;
    } else {
        
        p_importe.innerText =`No alcanzó el valor necesario para adquirir el descuento`;
    }
}

/* Ejercicio 2 */
const btn_promedio = document.getElementById('btn_promedio');
const p_promedio = document.getElementById('p_promedio');

btn_promedio.addEventListener('click', promedio);

function promedio(){
    const nombre = document.getElementById('nombre').value;
    const n_parcial = parseFloat(document.getElementById('n_parcial').value);
    const n_final = parseFloat(document.getElementById('n_final').value);
    const n_practicas = parseFloat(document.getElementById('n_practicas').value);
    let promedio_final = (n_parcial * 0.25)+(n_final * 0.5)+(n_practicas * 0.25);

    if(promedio_final>=11){

        p_promedio.innerText = `El alumno ${nombre} tiene un promedio final de ${promedio_final}, ha aprobado`;
    
    } else {
    
        p_promedio.innerText = `El alumno ${nombre} ha desaprobado`

    }
}

/* Reto1 1 */
const btn_pagos = document.getElementById('btn_pagos');
const p_pagos = document.getElementById('p_pagos');

btn_pagos.addEventListener('click', pagos);

function pagos(){
    const nombre_t = document.getElementById('nombre_t').value;
    const dias = parseInt(document.getElementById('dias').value);

    if(dias>15){

        let pago_f = (dias*40)*120/100;
        
        p_pagos.innerText =`${nombre_t} por los ${dias} días de trabajo recibirá S/${pago_f}`;

    } else {

        let pago_f = dias*40;
        
        p_pagos.innerText =`${nombre_t} por los ${dias} días de trabajo recibirá S/${pago_f}`;

    }
}

/* RETO 2 */
const btn_pago_f = document.getElementById('btn_pago_f');
const p_pago_f = document.getElementById('p_pago_f');

btn_pago_f.addEventListener('click', precioTotal);

function precioTotal(){
    const muñecas = parseInt(document.getElementById('muñecas').value);
    const robots = parseInt(document.getElementById('robots').value);
    let paquete = (muñecas*0.5)+(robots*1);
    let delivery = 5;
    
    if(paquete>10){

        let pago_f = delivery+1;

        p_pago_f.innerText =`El precio del servicio de delivery es S/${pago_f}`;

    } else if(paquete>=1) {

        let pago_f = delivery;

        p_pago_f.innerText =`El precio del servicio de delivery es S/${pago_f}`;

    } else {

        p_pago_f.innerText =`No se han realizado pedidos`;
        
    }
}