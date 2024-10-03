
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