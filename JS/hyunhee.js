const infoItems = [
  { name: "이름 : ", description: "안현희" },
  { name: "나이 : ", description: "35" },
  { name: "MBTI : ", description: "ENFJ" },
  { name: "취미 : ", description: "걷기" },
  { name: "각오 : ", description: "최선을 다하겠습니다." },
];

const infoSection = document.querySelector("#contents");

infoItems.forEach((item) => {
  const infoDiv = document.createElement("div");
  const infoName = document.createElement("span");
  const infoContent = document.createElement("span");

  infoDiv.classList.add("info_box");
  infoName.innerText = item.name;
  infoContent.innerText = item.description;
  infoDiv.append(infoName);
  infoDiv.append(infoContent);
  infoSection.append(infoDiv);
});
