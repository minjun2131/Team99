const infoItems = [[
  { name: "이름 ", description: "강민정" },
  { name: "MBTI ", description: "INTJ" },
  { name: "장점 ", description: "적극적" },
  { name: "협업 스타일 ", description: "최선을 다하겠습니다." },
  { name: "좋아하는 것 ", description: "걷기" },
  { name: "하고 싶은 말", description: "최선을 다하겠습니다." },
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
  { name: "장점 ", description: "적극적" },
  { name: "협업 스타일 ", description: "최선을 다하겠습니다." },
  { name: "좋아하는 것 ", description: "걷기" },
  { name: "하고 싶은 말", description: "최선을 다하겠습니다." },
], [
  { name: "이름 ", description: "정종하" },
  { name: "MBTI ", description: "ENFJ" },
  { name: "장점 ", description: "적극적" },
  { name: "협업 스타일 ", description: "최선을 다하겠습니다." },
  { name: "좋아하는 것 ", description: "걷기" },
  { name: "하고 싶은 말", description: "최선을 다하겠습니다." },
]];

const infoSection = document.querySelector("#contents");

infoItems[0].forEach((item) => {
  const infoDiv = document.createElement("div");
  const infoName = document.createElement("p");
  const infoContent = document.createElement("span");

  infoDiv.classList.add("info_box");
  infoName.classList.add("info_name");
  infoContent.classList.add("info_con")
  infoName.innerText = item.name;
  infoContent.innerText = item.description;
  infoDiv.append(infoName);
  infoDiv.append(infoContent);
  infoSection.append(infoDiv);
});

const infoSection2 = document.querySelector("#contents2");

infoItems[1].forEach((item) => {
  const infoDiv = document.createElement("div");
  const infoName = document.createElement("p");
  const infoContent = document.createElement("span");

  infoDiv.classList.add("info_box");
  infoName.classList.add("info_name");
  infoContent.classList.add("info_con")
  infoName.innerText = item.name;
  infoContent.innerText = item.description;
  infoDiv.append(infoName);
  infoDiv.append(infoContent);
  infoSection2.append(infoDiv);
});

const infoSection3 = document.querySelector("#contents3");

infoItems[2].forEach((item) => {
  const infoDiv = document.createElement("div");
  const infoName = document.createElement("p");
  const infoContent = document.createElement("span");

  infoDiv.classList.add("info_box");
  infoName.classList.add("info_name");
  infoContent.classList.add("info_con")
  infoName.innerText = item.name;
  infoContent.innerText = item.description;
  infoDiv.append(infoName);
  infoDiv.append(infoContent);
  infoSection3.append(infoDiv);
});

const infoSection4 = document.querySelector("#contents4");

infoItems[3].forEach((item) => {
  const infoDiv = document.createElement("div");
  const infoName = document.createElement("p");
  const infoContent = document.createElement("span");

  infoDiv.classList.add("info_box");
  infoName.classList.add("info_name");
  infoContent.classList.add("info_con")
  infoName.innerText = item.name;
  infoContent.innerText = item.description;
  infoDiv.append(infoName);
  infoDiv.append(infoContent);
  infoSection4.append(infoDiv);
});
