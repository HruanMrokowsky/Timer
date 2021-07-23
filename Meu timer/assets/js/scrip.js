function getTimeSeconds(seconds){
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('PT-BR',{
        hour12:false,
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let second = 0;
let timer;

function initTime(){
 timer = setInterval(() => {second++;
    relogio.innerHTML = getTimeSeconds(second)}, 1000);
}

iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado')
    clearInterval(timer)
    initTime();
})

pausar.addEventListener('click', function(event){
    relogio.classList.add('pausado')
   clearInterval(timer)
})

zerar.addEventListener('click', function(event){
    relogio.classList.remove('pausado')
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    second = 0;
})