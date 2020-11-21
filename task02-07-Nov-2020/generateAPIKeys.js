function getDataByCityName(){
    let key = "0851303a52abe793c27785050a6f046b";
    fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid="+key)
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
}

function getDataByCityId() {
    let key = "0851303a52abe793c27785050a6f046b";

    let id = 2172797;
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${key}`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}


function getDataByLatAndLong() {
    let key = "0851303a52abe793c27785050a6f046b";

    let lat = 35;
    let long = 139;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}






