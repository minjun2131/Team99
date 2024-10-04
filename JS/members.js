const instagramItem = [
  {
    name: "김호준",
    hastag_first: "#어린간",
    hastag_second: "#조장",
    like: "10만",
    picture: "./img/khj.gif",
    blog: "https://velog.io/@minjun23221/posts",
    github: "https://github.com/minjun2131",
  },
  {
    name: "안현희",
    hastag_first: "#지방간",
    hastag_second: "#조금있음..",
    like: "11만",
    picture: "./img/ahh.jpg",
    blog: "https://velog.io/@hhyun19/posts",
    github: "https://github.com/ahh0619",
  },
  {
    name: "강민정",
    hastag_first: "#CSS",
    hastag_second: "#BTS랑 팔로워 같음",
    like: "7540만",
    picture: "./img/kmj.jpg",
    blog: "https://velog.io/@kang1129/posts",
    github: "https://github.com/cara656513",
  },
  {
    name: "정종하",
    hastag_first: "#술 좋아함",
    hastag_second: "#매일 마실걸?",
    like: "12만",
    picture: "./img/jjh.png",
    blog: "https://jjh0506.tistory.com/",
    github: "https://github.com/Jongha56",
  },
];

// 체스판 생성
let chess = [];
let modalidx = [[0,0], [1,6], [2,2], [3,4]];
let horse = [[5,6], [7,1]];
let modalname = ["hj_btn", "hh_btn", "mj_btn", "jh_btn"]
for (let i = 0; i < 8; ++i)
{
  let line = [];
  for (let j = 0; j < 8; ++j)
  {
    let chesscolor = i % 2 == 0 ? j % 2 == 0 ? "chess_white" : "chess_black" : j % 2 == 0 ? "chess_black" : "chess_white";

    line.push(chesscolor);
  }
  chess.push(line);
}

const chessline = document.querySelector(".root");
chessline.innerHTML = "";
let curridx = 0, horseidx = 0;
for (let i = 0; i < chess.length; ++i) {
  let text = `<div class="chessline">
  `;
  for (let j = 0; j < chess[i].length; ++j) {
      text += `<div class="${chess[i][j]}">
    `;
    if (modalidx[curridx][0] == i && modalidx[curridx][1] == j) {
      let itemColor = chess[i][j] == "chess_white" ? "chess_item_white" : "chess_item_black";
      let itemShape = chess[i][j] != "chess_white" ? "./img/whitehorse.png" : "./img/blackhorse.png";
      text += `
        <button class="${modalname[curridx]}">
          <img class="${itemColor}" src="${itemShape}" />
        </button>
      `;
      if (curridx < 3) curridx++;
    }
    else if (horse[horseidx][0] == i && horse[horseidx][1] == j) {
      let itemColor = chess[i][j] == "chess_white" ? "chess_item_white" : "chess_item_black";
      let itemShape = chess[i][j] != "chess_white" ? "./img/whitehorse.png" : "./img/blackhorse.png";

      text += `
        <img class="${itemColor}" src="${itemShape}" />
      `;
      if (horseidx < 1) horseidx++;
    }

    text += "</div>"
  }
  chessline.innerHTML += text;
}
//==================

const khjBtn = document.querySelector(".hj_btn");
const ahhBtn = document.querySelector(".hh_btn");
const kmjBtn = document.querySelector(".mj_btn");
const jjhBtn = document.querySelector(".jh_btn");
const closeBtn = document.querySelector(".instagram_close_btn");

const instagramModal = document.querySelector(".instagram");
const instagramImgBox = document.querySelector(".instagram_img");

const instargramImg = document.createElement("img");
instargramImg.classList = "instagram_img_item";

const likeCount = document.querySelector(".recommend_count");
const userName = document.querySelector(".content_main");
const userTmi_1 = document.querySelector(".contest_hashtag");
const userTmi_2 = document.querySelector(".contest_hashtag2");

const velogUrl = document.querySelector(".link_velog");
const githubUrl = document.querySelector(".link_github");

const onInstagram = () => {
  instagramModal.style.visibility = "visible";
};

const hideInstagram = () => {
  instagramModal.style.visibility = "hidden";
};

const imgUrlSet = (url) => {
  instargramImg.src = url;
  instagramImgBox.appendChild(instargramImg);
};

const userInfoSet = (e) => {
  likeCount.textContent = e.like;
  userName.textContent = e.name;
  userTmi_1.textContent = e.hastag_first;
  userTmi_2.textContent = e.hastag_second;
  velogUrl.href = e.blog;
  githubUrl.href = e.github;
};

instagramItem.forEach((e) => {
  if (e.name === "김호준") {
    khjBtn.addEventListener("click", () => {
      onInstagram();
      imgUrlSet(e.picture);
      userInfoSet(e);
    });
  }
  if (e.name === "안현희") {
    ahhBtn.addEventListener("click", () => {
      onInstagram();
      imgUrlSet(e.picture);
      userInfoSet(e);
    });
  }
  if (e.name === "강민정") {
    kmjBtn.addEventListener("click", () => {
      onInstagram();
      imgUrlSet(e.picture);
      userInfoSet(e);
    });
  }

  if (e.name === "정종하") {
    jjhBtn.addEventListener("click", () => {
      onInstagram();
      imgUrlSet(e.picture);
      userInfoSet(e);
    });
  }
});

closeBtn.addEventListener("click", () => {
  hideInstagram();
});


/* 멤버스 애니메이션 jQuery */


