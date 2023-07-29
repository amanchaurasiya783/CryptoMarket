// Constants
const viewTab = document.querySelectorAll(".view-tab");
const list = document.querySelectorAll("#list");
const main = document.querySelector("#main");
const slider = document.querySelector("#slider");
const card = document.querySelectorAll("#card");
const cardInner = document.querySelectorAll("#card-inner");
const priceChange = document.querySelectorAll(".price-change");
const currPrice = document.querySelectorAll("#curr-price");
const API = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";

// fetching api data
fetch(API).then((apiData)=>{
    return apiData.json();
}).then((objectData)=>{
    let data = "";
    objectData.map((values) => {
        data += `<div class="card" id="card">
            <div class="card-inner" id="card-inner">
                <div class="coin-title">
                    <div class="coin-image"><img src="${values.image}" alt="${values.symbol}"></div>
                    <div class="coin-symbol">
                    ${values.symbol}<br>
                        <span class="coin-name">${values.name}</span>
                    </div>
                </div>
                <div class="price-change">${values.price_change_percentage_24h.toFixed(2) + " %"}</div>
                <div class="curr-price">${"$ "+values.current_price.toFixed(2)}</div>
                <div class="total-vol"><span>Total Volume : </span> ${"$ "+values.total_volume}</div>
                <div class="total-vol"><span> Market Cap : </span> ${"$ "+values.market_cap}</div>
            </div>
        </div>`
    })
    main.innerHTML = data;
}).catch((error) =>{
    console.log(error);
})

function toggleView() {
    main.classList.toggle("grid-view");
    for (let i = 0; i < card.length; i++) {
        card[i].classList.toggle("card");
        cardInner[i].classList.toggle("card-inner");
        cardInner[i].classList.toggle("list-inner");
        viewTab[i].classList.toggle("active");
    }
}