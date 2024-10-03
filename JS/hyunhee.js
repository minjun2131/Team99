const infoItems = [
  { name: "이름 ", description: "안현희" },
  { name: "MBTI ", description: "ENFJ" },
  { name: "장점 ", description: "적극적" },
  { name: "협업 스타일 ", description: "최선을 다하겠습니다." },
  { name: "좋아하는 것 ", description: "걷기" },
  { name: "하고 싶은 말", description: "최선을 다하겠습니다. 최선을 다하겠습니다.최선을 다하겠습니다.최선을 다하겠습니다.최선을 다하겠습니다.최선을 다하겠습니다.최선을 다하겠습니다.최선을 다하겠습니다.최선을 다하겠습니다.최선을 다하겠습니다." },
];

const infoSection = document.querySelector("#contents");

infoItems.forEach((item) => {
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
