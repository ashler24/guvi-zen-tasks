function getData() {
   
    fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data => data.forEach(item => { console.log(item.flag) }))
        .then(data => console.log(data))
        .catch(err => console.log(err))
}