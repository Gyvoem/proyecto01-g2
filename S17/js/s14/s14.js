/* Ejercicio 8 */
const btn_d_percent = document.getElementById('btn_d_percent');
const p_d_percent = document.getElementById('p_d_percent');

btn_d_percent.addEventListener('click', porcent);

function porcent(){
    const varones = parseInt(cantVarones.value);
    const mujeres = parseInt(cantMujeres.value);
    total = varones + mujeres;
  porcentajeVarones = (varones / total) * 100;
  porcentajeMujeres = (mujeres / total) * 100;
    
    p_d_percent.innerText =`varones ${porcentajeVarones}; B) S/${porcentajeMujeres}`;
}