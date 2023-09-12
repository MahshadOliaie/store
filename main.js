
let root = document.querySelector(".root");




function products(id) {
    if(id){
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(Response => Response.json())
        .then(data => showProduct(data));
    }
    else{
        fetch(`https://fakestoreapi.com/products`)
        .then(Response => Response.json())
        .then(data => render(data));
    }
    
}




function render(data) {
    let template = data.map(product => {
        const { title, image, price, category, rating ,id } = product;

        return `<div class="card" onclick="products(${id})">
        <div class="image">
            <img src="${image}" alt="">
        </div>
    
        <div class="about">
            <h3 class="title">${title}</h3>
            <p class="category">category: ${category}</p>
            <p class="rating">rate: ${rating.rate}</p>
            <p class="price">price: ${price} $</p>
        </div>
    </div>`
    }).join("");

    root.innerHTML = template;
}



function showProduct(data) {
    const { title, image, price, category, rating , description } = data;

    root.innerHTML = `<div class="mainImg">
    <img src="${image}" alt="">
</div>
<div class="aboutProduct">
    <h2 class="titleProduct">${title}</h2>
    <p class="description">${description}</p>
    <p class="categoryProduct">category: ${category}</p>
    <p class="ratingProduct">rate: ${rating.rate}</p>
    <p class="priceProduct">price: ${price} $</p>
    <button class="shop">ADD</button>
</div>`;

    root.classList.add("showProduct");
    root.classList.remove("allProducts");

}



products();