
//자기소개창 닫기,열기
let closebtn = document.querySelector("#close");
let contents = document.querySelector("#contents");
let openbtn = document.querySelector("#open");

closebtn.addEventListener("click", function () {
    contents.classList.add("hidden");
    openbtn.classList.remove("hidden");
});

openbtn.addEventListener("click", function () {
    openbtn.classList.add("hidden");
    contents.classList.remove("hidden");
    contents.classList.remove("specialani");
});