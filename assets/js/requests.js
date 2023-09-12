

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


