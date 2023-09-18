

function products(id , firstPage) {
    if (id) {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(Response => Response.json())
            .then(data => showProduct(data , firstPage));
    }
    else {
        fetch(`https://fakestoreapi.com/products`)
            .then(Response => Response.json())
            .then(data => render(data , firstPage));
    }

    isFirstPage = firstPage;

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


