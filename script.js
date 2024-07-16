const carousel = document.querySelector(".carousel");
const API_URL = "https://jsonplaceholder.typicode.com/users"
async function fetchApi(url){
    const response = await fetch(url);
    response.json().then(data => loopData(data))
}


fetchApi(API_URL)

function loopData(data){
    data.map(item =>{
        let div = document.createElement("div");
        div.classList.add("item","border","border-2","p-3","text-center","col-6","col-md-4")
        div.innerHTML = `
          <div class="img"></div>
          <div class="info">
            <h4 class="name">${item.name}</h4>
            <p class="username m-0">${item.username}</p>
            <p class="city">${item.address.city}</p>
          </div>
        `
        carousel.append(div);
    })
}