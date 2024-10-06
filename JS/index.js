//타이핑 효과
const $txt = document.querySelector(".visual_comment");
const content = "Team 99\n개발자를 꿈꾸는 비전공자";
let contentIndex = 0;

let typing = function () {
  $txt.innerHTML += content[contentIndex];
  contentIndex++;
  if (content[contentIndex] === "\n") {
    $txt.innerHTML += "<br />";
    contentIndex++;
  }
  if (contentIndex > content.length) {
    $txt.textContent = "";
    contentIndex = 0;
  }
};

setInterval(typing, 200);

const windowHeight = window.innerHeight;
const home4EventHandler = ()=>{
  const Text = document.querySelector('.cont-title');

  if(Text.getBoundingClientRect().top < windowHeight-200){
      setTimeout(()=>{
          Text.style.animation = 'appear_from_bottom ease 1.5s'
          Text.style.opacity = 1
      },200) 
      window.removeEventListener('scroll',home4EventHandler)
  }
}
window.addEventListener('scroll',home4EventHandler)


const home3EventHandler = ()=>{
  const Card0 = document.querySelector('.card');

  if(Card0.getBoundingClientRect().top < windowHeight-200){
      setTimeout(()=>{
          Card0.style.animation = 'appear_from_bottom ease 1.5s'
          Card0.style.opacity = 1

      },200) 
      window.removeEventListener('scroll',home3EventHandler)
  }
}
window.addEventListener('scroll',home3EventHandler)

const home2EventHandler = ()=>{
  const Card1 = document.querySelector('.card34');

  if(Card1.getBoundingClientRect().top < windowHeight-200){
      setTimeout(()=>{
          Card1.style.animation = 'appear_from_bottom ease 1.5s'
          Card1.style.opacity = 1

      },200) 
      window.removeEventListener('scroll',home3EventHandler)
  }
}
window.addEventListener('scroll',home2EventHandler)
