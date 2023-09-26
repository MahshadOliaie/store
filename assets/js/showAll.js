

function pageStatefn(pagination) {
    debugger
    let template = root.outerHTML;
    document.body.innerHTML = ` <header class="header">
    <div class="header__logo">LOGOOO</div>
    <p class="header__storeName">STORE NAME</p>

    <svg xmlns="http://www.w3.org/2000/svg" class="bars" height="1em" onclick="showbar()"
        viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
    </svg>

    <nav class="header__nav">
        <p onclick="reload()">HOME</p>
        <p onclick="getCategories()" class="category">CATEGORY</p>
        <div class="cartPack">
            <p id="cart" onclick="cartReq()">CART </p>
            <div class="cartNumber">${cartLength}</div>
        </div>
        <p id="login">LOG IN</p>
    </nav>
</header>

    <section class="menu">
    <p onclick="reload()">HOME</p>
    <p onclick="getCategories()" class="categoryMenu">CATEGORY</p>
    <div class="cartPack">
        <p id="cartMenu" onclick="cartReq()">CART </p>
        <div class="cartNumber">${cartLength}</div>
    </div>
    <p id="loginMenu">LOG IN</p>
</section>



    <section class="categoryList">
    </section>
`+ template + `<div class="pages">
${pagination}
</div>
`;

    root = document.querySelector(".root");
    categoryList = document.querySelector(".categoryList")
    categoryMenu = document.querySelectorAll(".categoryMenu")
    document.getElementById(currentPage).classList.add("currentPage");
    menuEventAdder()

}




async function showAllfn() {
    await products(null, false)
    cartNumberfn()
}


showAll.addEventListener("click", showAllfn)
