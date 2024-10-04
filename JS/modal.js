const infoItems = [
  [
    { name: "이름 ", description: "강민정" },
    { name: "MBTI ", description: "INTJ" },
    { name: "장점 ", description: "적극적" },
    {
      name: "협업 스타일 ",
      description: "적절한 때는 있지만 필요없는 의견은 없다!",
    },
    {
      name: "좋아하는 것 ",
      description: "재밌는 운동(수영, 등산, 스쿼시, 클라이밍...), 디저트!!",
    },
    {
      name: "하고 싶은 말",
      description: "체인소맨 작가의 영화 '룩백'을 봐주세요.",
    },
  ],
  [
    { name: "이름 ", description: "김호준" },
    { name: "MBTI ", description: "ENFJ" },
    { name: "장점 ", description: "적극적" },
    { name: "협업 스타일 ", description: "최선을 다하겠습니다." },
    { name: "좋아하는 것 ", description: "걷기" },
    { name: "하고 싶은 말", description: "최선을 다하겠습니다." },
  ],
  [
    { name: "이름 ", description: "안현희" },
    { name: "MBTI ", description: "ENFJ" },
    { name: "장점 ", description: "항상 최선을 다합니다." },
    {
      name: "협업 스타일 ",
      description: "팀워크와 소통을 굉장히 중요시 여깁니다.",
    },
    { name: "좋아하는 것 ", description: "걷기" },
    {
      name: "하고 싶은 말",
      description: "모든 고난에는 배움이 있다고 했습니다. 다 같이 힘내요!",
    },
  ],
  [
    { name: "이름 ", description: "정종하" },
    { name: "MBTI ", description: "INTJ" },
    { name: "장점 ", description: "술자리 끝까지 있을 수 있음" },
    {
      name: "협업 스타일 ",
      description: "조용히 꾸준히 끝까지 해낼때까지 합니다",
    },
    { name: "좋아하는 것 ", description: "낮술" },
    {
      name: "하고 싶은 말",
      description: "리액트 과정 끝까지 함께 화이팅해요!",
    },
  ],
];

const infoSection = document.querySelector("#contents");
const infoSection2 = document.querySelector("#contents2");
const infoSection3 = document.querySelector("#contents3");
const infoSection4 = document.querySelector("#contents4");

for (let i = 0; i < infoItems.length; i++) {
  infoItems[i].forEach((item) => {
    const infoDiv = document.createElement("div");
    const infoName = document.createElement("p");
    const infoContent = document.createElement("span");

    infoDiv.classList.add("info_box");
    infoName.classList.add("info_name");
    infoContent.classList.add("info_con");

    const userInformation = (item) => {
      infoName.innerText = item.name;
      infoContent.innerText = item.description;
      infoDiv.appendChild(infoName);
      infoDiv.appendChild(infoContent);
    };

    if (i === 0) {
      userInformation(item);
      infoSection.appendChild(infoDiv);
    }

    if (i === 1) {
      userInformation(item);
      infoSection2.appendChild(infoDiv);
    }
    if (i === 2) {
      userInformation(item);
      infoSection3.appendChild(infoDiv);
    }
    if (i === 3) {
      userInformation(item);
      infoSection4.appendChild(infoDiv);
    }
  });
}
