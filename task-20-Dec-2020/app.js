let countryDataList;
//html
//create a container
let mainContainer = document.createElement("div");
mainContainer.setAttribute("class", "container-sm wrapper");
document.body.appendChild(mainContainer);

//rest countries data
async function getCountryData() {
    await fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data => countryDataList = data)
        .catch(err => console.log(err))
    
    createCard(countryDataList);

}

// let getDataBtn = document.getElementById("getData");
document.body.onload = getCountryData

//name,flag,capital,region,countrycode
//list[i].name, list[i].flag, list[i].capital, list[i].region, list[i].aplpha3Code
function createCard(list) {

    let src = "", alt = "...", href;


    for (let i = 0; i < 250; i++) {
        src = list[i].flag;
        let cityName = list[i].capital.split(" ").join("");
        let apiKey = "0851303a52abe793c27785050a6f046b";
        href = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        let countryName = document.createElement("div");
        countryName.setAttribute("id", "countryname");
        countryName.innerText = list[i].name;
        card.appendChild(countryName);
        let img = document.createElement("img");
        img.setAttribute("class", "flag");
        img.setAttribute("src", src);
        img.setAttribute("alt", alt);
        //card body
        let card_body = document.createElement("div");
        card_body.setAttribute("class", "card-body");

        let infoWrapper = document.createElement("div");
        infoWrapper.setAttribute("id", "infoWrapper");

        let info = [];
        info.push(`Capital:${list[i].capital}`);
        info.push(`Region:${list[i].region}`);
        info.push(`Country Code:${list[i].alpha3Code}`);

        info.forEach(item => {
            let div = document.createElement("div");
            div.innerHTML = item;
            infoWrapper.appendChild(div);
        })

        let a = document.createElement("a");
        a.setAttribute("target", "_blank");
        a.setAttribute("href", href);
        a.setAttribute("class", "btn btn-default");
        a.setAttribute("id", "weatherBtn");
        a.innerHTML = "Click for weather";

        card_body.appendChild(img);
        card_body.appendChild(infoWrapper);
        card_body.appendChild(a);

        card.appendChild(card_body);

        mainContainer.appendChild(card);

    }
}

