/* Ejercicio 1 */
const btn_sumx = document.getElementById('btn_sumx');
const p_sumx = document.getElementById('p_sumx');

btn_sumx.addEventListener('click', sumaYmul);

function sumaYmul(){
    //parseFloat acepta decimales
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    let suma = n1 + n2;
    let producto = n1 * n2;
    
    p_sumx.innerText =`La suma es ${suma} y la multiplicación es ${producto}`;
}

/* Ejercicio 2 */
const btn_porcent = document.getElementById('btn_porcent');
const p_porcent = document.getElementById('p_porcent');

btn_porcent.addEventListener('click', porcent);

function porcent(){
    //parseInt solo acepta números enteros
    const n3 = parseInt(document.getElementById('n3').value);
    let porcent20 = n3 * 20 / 100;
    
    p_porcent.innerText =`El 20% de ${n3} es ${porcent20}`;
}

/* Ejercicio 3 */
const btn_cmm = document.getElementById('btn_cmm');
const p_cmm = document.getElementById('p_cmm');

btn_cmm.addEventListener('click', mts_cmm);

function mts_cmm(){
    const n4 = parseFloat(document.getElementById('n4').value);
    let cm = n4 * 100;
    let mm = n4 * 1000;
    
    p_cmm.innerText =`${n4} es ${cm}cm y ${mm}mm`;
}

/* Ejercicio 4 */
const btn_area = document.getElementById('btn_area');
const p_area = document.getElementById('p_area');

btn_area.onclick = function(){
    const base = parseInt(document.getElementById('base').value);
    const altura = parseInt(document.getElementById('altura').value);
    let area = base * altura / 2;

    p_area.innerText =`El área es ${area}`;
}

/* Ejercicio 5 */
const btn_soles = document.getElementById('btn_soles');
const p_soles = document.getElementById('p_soles');

btn_soles.addEventListener('click', soles);

function soles(){
    const dollars = parseFloat(document.getElementById('dollars').value);
    let soles = dollars * 3.38;
    
    p_soles.innerText =`${dollars} dólares es igual a ${soles.toFixed(2)} soles`;
}

/* Ejercicio 6 */
const btn_mm = document.getElementById('btn_mm');
const p_mm = document.getElementById('p_mm');

btn_mm.addEventListener('click', mm);

function mm(){
    const pulgadas = parseFloat(document.getElementById('pulgadas').value);
    let mm = pulgadas * 25.4;
    
    p_mm.innerText =`${pulgadas} es igual a ${mm.toFixed(1)} mm`;
}

/* Ejercicio 7 */
const btn_cifras = document.getElementById('btn_cifras');
const p_cifras = document.getElementById('p_cifras');

btn_cifras.addEventListener('click', convertCifras);

function convertCifras(){
    const cifras = parseFloat(document.getElementById('cifras').value);
    let suma = cifras.toString().split('').map(Number).reduce(function (a, b) {
    return (a + b);
    }, 0);
    let exponent = Math.pow(suma, 2);
   
    p_cifras.innerText =`${exponent}`;
}

/* Ejercicio 8 */
const btn_d_percent = document.getElementById('btn_d_percent');
const p_d_percent = document.getElementById('p_d_percent');

btn_d_percent.addEventListener('click', monto);

function monto(){
    const dinero = parseFloat(document.getElementById('dinero').value);
    let A = dinero * 30 / 100;
    let B = dinero * 20 / 100;
    let C = dinero* 50 / 100;
    
    p_d_percent.innerText =`Socio A) S/${A.toFixed(2)}; B) S/${B.toFixed(2)} y C) S/${C.toFixed(2)}`;
}

/* Ejercicio 9 */
const btn_p_final = document.getElementById('btn_p_final');
const p_p_final = document.getElementById('p_p_final');

btn_p_final.addEventListener('click', calcular);

function calcular(){
    const p_base = parseFloat(document.getElementById('p_base').value);
    let IGV = p_base * 19/ 100;
    let p_final = p_base+IGV;
    
    p_p_final.innerText =`IGV es S/${IGV.toFixed(2)} y precio final es S/${p_final.toFixed(2)}`;
}

/* Ejercicio 10 */
const btn_entradas = document.getElementById('btn_entradas');
const p_entradas = document.getElementById('p_entradas');

btn_entradas.addEventListener('click', entradas);

function entradas(){
    const eg = parseInt(document.getElementById('eg').value);
    const em65 = parseInt(document.getElementById('em65').value);
    const em = parseInt(document.getElementById('em').value);
    let egv = eg * 150;
    let em65v = em65 * 50;
    let emv = em * 80;
    let etotal = egv + em65v + emv;

    p_entradas.innerText =`Se recaudó S/${egv} por entrada general, S/${em65v} por mayores de 65 y S/${emv} por menores de edad. 
    En total se recaudó S/${etotal}`;
}