const anos = document.getElementById("anos");
const meses = document.getElementById('meses');
const dias = document.getElementById('dias');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
let ano = 0;
let mes = 2;
let dia = new Date().getDate() + 30 - 18


function validacao() {

    const hora = new Date().getHours()
    const minuto = new Date().getMinutes()
    const segundo = new Date().getSeconds()

    if (mes == 12){ 
        ano ++
        meses.innerHTML = 0
        mes = 0
    }

    if (dia == 30){ 
        mes ++
        meses.innerHTML = mes
        dias.innerHTML = 0
    } else if (dia >=31){
        mes ++
        meses.innerHTML = mes
        dia = new Date().getDate() - 18
    }

    anos.innerHTML = ano;
    meses.innerHTML = mes;
    dias.innerHTML = dia;
    horas.innerHTML = hora;
    minutos.innerHTML = minuto;
    segundos.innerHTML = segundo;
}

    setInterval(validacao, 1000)