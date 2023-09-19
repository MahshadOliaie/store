

function products(id, firstPage) {
    console.trace("call api")
    if (id) {
        return fetch(`https://fakestoreapi.com/products/${id}`)
            .then(Response => Response.json())
            .then(data => {
                isFirstPage = firstPage;
                showProduct(data, firstPage);
            })
    }
    else {
        return fetch(`https://fakestoreapi.com/products`)
            .then(Response => Response.json())
            .then(data => {
                isFirstPage = firstPage;
                render(data, firstPage)
            });
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


