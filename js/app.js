const time = ()=>{
    let date    = new Date();
    let hour    = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return document.getElementById('hour').innerHTML = `${hour}:${minutes}:${seconds}`;
}

// no necesitamos del onload para que se actualize cada segundo
setInterval(time, 1000);