// en esta ocasion estoy usando arrow function
const time = ()=>{
    let date    = new Date();
    let hour    = dobleDigito(date.getHours());
    let minutes = dobleDigito(date.getMinutes());
    let seconds = dobleDigito(date.getSeconds());

    fullDate(date);

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



// no necesitamos del onload para que se actualize cada segundo
setInterval(time, 1000);
