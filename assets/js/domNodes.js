

let root = document.querySelector(".root");
let bars = document.querySelector(".bars");
let cartCount = document.querySelectorAll(".cartNumber");
let cartLength;
let showAll = document.querySelector(".showAll");
let pageState = document.querySelector(".all");
let isFirstPage;
let category = document.querySelectorAll(".category");
let categoryList = document.querySelector(".categoryList")
let categoryMenu = document.querySelectorAll(".categoryMenu")
let navItems = document.querySelectorAll(".header__nav p:not(#login)")
let perPage = 12;
let page = 1;
let currentPage = "1";