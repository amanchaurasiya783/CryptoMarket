// Constants
const viewTab = document.querySelectorAll(".view-tab");
const list = document.querySelectorAll("#list");
const main = document.querySelector("#main");
const slider = document.querySelector("#slider");
const priceChange = document.querySelectorAll(".price-change");
const currPrice = document.querySelectorAll("#curr-price");
const API = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";

// fetching api data
fetch(API).then((apiData)=>{
    return apiData.json();
}).then((objectData)=>{
    let data = "";
    objectData.map((values) => {
        // <div class="card" id="card"><div class="cardInner" id="card-inner">
        data = `<div class="coin-title">
                    <div class="coin-image"><img src="${values.image}" alt="${values.symbol}"></div>
                    <div class="coin-symbol">
                    ${values.symbol}<br>
                        <span class="coin-name">${values.name}</span>
                    </div>
                </div>
                <div class="price-change">${values.price_change_percentage_24h.toFixed(2) + " %"}</div>
                <div class="curr-price">${"$ "+values.current_price.toFixed(2)}</div>
                <div class="total-vol"><span>Total Volume : </span> ${"$ "+values.total_volume}</div>
                <div class="total-vol"><span> Market Cap : </span> ${"$ "+values.market_cap}</div>`;
            addDataToDOM(data);
    });
}).catch((error) =>{
    console.log(error);
})

function addDataToDOM(data){
    const card = document.createElement('div');
    card.setAttribute('id', 'card');
    card.classList.add('card');
    const cardInner = document.createElement('div');
    cardInner.setAttribute('id', 'cardInner');
    cardInner.classList.add('card-inner');
    cardInner.innerHTML = data;
    card.appendChild(cardInner);
    main.appendChild(card);
}

function toggleView() {
    main.classList.toggle("grid-view");
    viewTab[0].classList.toggle("active");
    viewTab[1].classList.toggle("active");
    console.log(cardInner.length);
    for (let i = 0; i < card.length; i++) {
        card[i].classList.toggle("card");
        cardInner[i].classList.toggle("card-inner");
        cardInner[i].classList.toggle("list-inner");
    }
}