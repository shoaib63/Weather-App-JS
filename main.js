// `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
// api.openweathermap.org/data/2.5/weather?q=tehran&appid=edc228562ac0a8aa3116d41c0687cf56&units=metric


const form = document.querySelector(".top-banner form"); 
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg"); 
const list = document.querySelector(".ajax-section .cities"); 

const apikey = "edc228562ac0a8aa3116d41c0687cf56";

form.addEventListener("submit" , e =>{
    e.preventDefault();
    let inputVal = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apikey}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const {main, name , sys, weather} = data; 
        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
        const li = document.createElement("li");
        li.classList.add("city"); 
        console.log(name);
        const markup = `
            <h2 class="city-name" data-name=${name},${sys.country}>
                <span>${name}</span>
                <span>${sys.country}</span>
            </h2>
            <div class="city-temp">${Math.round(main.temp)}</div>
            <figure>
                <img class="city-icon" src="${icon}" alt="city">
                <figurecaption>${weather[0]['description']}</figurecation>
            </figure>
        `;
        li.innerHTML = markup;
        list.appendChild(li);
        msg.innerText = ""

    })
    .catch(()=> {
        msg.innerText = "Search for a valid city"
    })
    input.value="";
})


import sum, {name, sayHi} from "./app.js"; 
console.log(sum(1,3));

sayHi();
