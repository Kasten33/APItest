const URL = "https://iskarr.github.io/austindonovan.github.io/api/business.json";

let cards = document.querySelector("div.cards");
let para = document.createElement("p");

fetch(URL)
.then((response) => response.json())
.then((jsObject) => {
let business = jsObject.business;
for (let i = 0; i < business.length; i++){
    console.log(business[i].name);

    //creates card and places business name on card

    let card = document.createElement("div");
    card.className = "card";
    let h2 = document.createElement("h2")
    h2.textContent = business[i].name;
    card.appendChild(h2);
    document.querySelector("div.cards").appendChild(card);

    //Images

    let img = document.createElement("img");
    img.src = business[i].imageurl;
    img.setAttribute('width', '100px')
    card.appendChild(img);
    document.querySelector("div.cards").appendChild(card);

    

    //Location

    let h3 = document.createElement("h3");
    h3.textContent = business[i].address;
    card.appendChild(h3);
    document.querySelector("div.cards").appendChild(card);

    //Description

    let h4 = document.createElement("h4");
    h4.textContent = business[i].description;
    card.appendChild(h4);
    document.querySelector("div.cards").appendChild(card);

}
});
