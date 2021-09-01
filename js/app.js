// en esta ocasion estoy usando arrow function
const time = ()=>{
    let date    = new Date();
    let hour    = dobleDigito(date.getHours());
    let minutes = dobleDigito(date.getMinutes());
    let seconds = dobleDigito(date.getSeconds());

    fullDate(date);
    toggleStyle();
    return  document.getElementById('hour').innerHTML = `${hour}`,
            document.getElementById('minutes').innerHTML = `:${minutes}`,
            document.getElementById('seconds').innerHTML = `:${seconds}`;
}

const dobleDigito =(hora) =>{
    if(hora < 10){
        hora = `0${hora}`;
    }
    return hora;
}

const fullDate = (date) =>{
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre', 'Noviembre', 'Diciembre'];
    
    let weekDays = days[date.getDay()];
    let fecha = date.getDate();
    let mes   = months[date.getMonth()];
    let year  = date.getFullYear()

    let dayMonthYear = `${weekDays} ${fecha} ${mes} ${year}`;
    document.getElementById('text').innerHTML = `${dayMonthYear}`;
}

// funcion toggle para el border del contenedor
function toggleStyle(){
    let borderC  = document.getElementById('data-container');
        borderC.classList.toggle('data-border');
}

// no necesitamos del onload para que se actualize cada segundo

setInterval(time, 1000);


//codigo para el efecto de segundo al borde del contenedor/ 
// const evento = () =>{
//     let borderC  = document.getElementById('data-container');
//     borderC.style.border = '';
// }
// const eventoOff = () =>{
//     let border  = document.getElementById('data-container');

//     border.style.border = 'none';
// }
// setInterval(evento, 500);
// setInterval(eventoOff, 1000);