

function products(id) {
    if (id) {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(Response => Response.json())
            .then(data => showProduct(data));
    }
    else {
        fetch(`https://fakestoreapi.com/products`)
            .then(Response => Response.json())
            .then(data => render(data));
    }


}



function cartReq() {
    let all = [];

    fetch(`https://fakestoreapi.com/products`)
        .then(Response => Response.json())
        .then(data => all = data);

    fetch(`https://fakestoreapi.com/carts`)
        .then(Response => Response.json())
        .then(carts => cartFn(carts, all));
}


