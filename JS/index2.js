
//자기소개창 닫기,열기
let closebtn = document.querySelector("#close");
let contents = document.querySelector("#contents");
let openbtn = document.querySelector("#open");
let pic = document.querySelector("#mypic");
let title = document.querySelector("#title1");
let card = document.querySelector("#card1");

closebtn.addEventListener("click", function () {
    contents.classList.add("hidden");
    openbtn.classList.remove("hidden");
    pic.classList.remove("hidden");
    title.classList.remove("hidden");
    card.classList.add("specialani");
});

openbtn.addEventListener("click", function () {
    openbtn.classList.add("hidden");
    contents.classList.remove("hidden");
    pic.classList.add("hidden");
    title.classList.add("hidden");
    card.classList.remove("specialani");
});

let closebtn2 = document.querySelector("#close2");
let contents2 = document.querySelector("#contents2");
let openbtn2 = document.querySelector("#open2");
let pic2 = document.querySelector("#mypic2");
let title2 = document.querySelector("#title2");
let card2 = document.querySelector("#card2");

closebtn2.addEventListener("click", function () {
    contents2.classList.add("hidden");
    openbtn2.classList.remove("hidden");
    pic2.classList.remove("hidden");
    title2.classList.remove("hidden");
    card2.classList.add("specialani");
});

openbtn2.addEventListener("click", function () {
    openbtn2.classList.add("hidden");
    contents2.classList.remove("hidden");
    pic2.classList.add("hidden");
    title2.classList.add("hidden");
    card2.classList.remove("specialani");
});

let closebtn3 = document.querySelector("#close3");
let contents3 = document.querySelector("#contents3");
let openbtn3 = document.querySelector("#open3");
let pic3 = document.querySelector("#mypic3");
let title3 = document.querySelector("#title3");
let card3 = document.querySelector("#card3");

closebtn3.addEventListener("click", function () {
    contents3.classList.add("hidden");
    openbtn3.classList.remove("hidden");
    pic3.classList.remove("hidden");
    title3.classList.remove("hidden");
    card3.classList.add("specialani");
});

openbtn3.addEventListener("click", function () {
    openbtn3.classList.add("hidden");
    contents3.classList.remove("hidden");
    pic3.classList.add("hidden");
    title3.classList.add("hidden");
    card3.classList.remove("specialani");
});

let closebtn4 = document.querySelector("#close4");
let contents4 = document.querySelector("#contents4");
let openbtn4 = document.querySelector("#open4");
let pic4 = document.querySelector("#mypic4");
let title4 = document.querySelector("#title4");
let card4 = document.querySelector("#card4");

closebtn4.addEventListener("click", function () {
    contents4.classList.add("hidden");
    openbtn4.classList.remove("hidden");
    pic4.classList.remove("hidden");
    title4.classList.remove("hidden");
    card4.classList.add("specialani");
});

openbtn4.addEventListener("click", function () {
    openbtn4.classList.add("hidden");
    contents4.classList.remove("hidden");
    pic4.classList.add("hidden");
    title4.classList.add("hidden");
    card4.classList.remove("specialani");
});