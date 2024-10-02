// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  doc,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAumi67YzhPC0kopse8XNfxriC9BXQJmuA",
  authDomain: "sparta-1fc9d.firebaseapp.com",
  projectId: "sparta-1fc9d",
  storageBucket: "sparta-1fc9d.appspot.com",
  messagingSenderId: "74188594848",
  appId: "1:74188594848:web:585667ebd026161834f3c5",
  measurementId: "G-551QL0EMJ7",
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

$("#save").click(async function () {
  let userId = $("#id").val();
  let userPwd = $("#pw").val();
  let comment = $("#commentValue").val();

  let doc = {
    id: userId,
    comment: comment,
    pwd: userPwd,
    timeStamp: new Date().getTime(),
  };
  if (!userId || !userPwd || !comment) {
    alert("값을 입력하세요.");
  } else {
    await addDoc(collection(db, "comment"), doc);
    alert("저장완료");
    window.location.reload();
  }
});

let docs = await getDocs(
  query(collection(db, "comment"), orderBy("timeStamp"))
);
//const q = query(collection(db, "comment"), orderBy("timeStamp"));
//const docs = await getDocs(q);
docs.forEach((doc) => {
  let row = doc.data();
  let id = doc.id;
  let userId = row["id"];
  let comment = row["comment"];

  let commentlist = document.querySelector("#commentlist");
  let newli = document.createElement("li");
  let newspanId = document.createElement("span");
  let newSpanComment = document.createElement("span");
  let newbtn = document.createElement("button");
  let newbtn2 = document.createElement("button");

  newli.classList.add("newcomm");
  newbtn.classList.add("newbtn");
  newspanId.classList.add("newspanid");
  newSpanComment.classList.add("newspanpwd");
  newbtn.id = doc.id;
  newbtn2.classList.add("newbtn2");
  newbtn2.innerText = "✏️";
  newbtn2.setAttribute("data-comment-id", id); //dataset

  newspanId.textContent = `${userId}`;
  newspanId.setAttribute("data-comment-id", id); //dataset
  newSpanComment.textContent = ` : ${comment}`;

  newli.appendChild(newspanId);
  newli.appendChild(newSpanComment);
  newli.appendChild(newbtn);
  newli.appendChild(newbtn2);
  commentlist.appendChild(newli);
});

const modal = document.querySelector(".modal");
const modalmodifyBtn = document.querySelector(".modify_btn");
const modalCloseBtn = document.querySelector(".close_btn");
const modifyBtn = document.querySelectorAll(".newbtn2");
const modalInput = document.querySelector("#pwcheck");
const modalInputPwd = document.querySelector("#pwcheck");
const modalDeleteBtn = document.querySelector(".delete_btn");

//연필버튼
for (let index = 0; index < modifyBtn.length; index++) {
  modifyBtn[index].addEventListener("click", async function () {
    let docs = await getDocs(collection(db, "comment"));
    docs.forEach((e) => {
      modalInput.setAttribute("data-comment-id", e.id);
      modal.style.display = "block";
    });
  });
}

//모달창 수정버튼
modalmodifyBtn.addEventListener("click", async function () {
  let comment = $("#modifycomment").val();
  const modalId = modalInputPwd.dataset.commentId;
  let docs = await getDocs(collection(db, "comment"));
  docs.forEach(async (e) => {
    if (!comment) {
      alert("수정할 값을 입력해주세요.");
    } else if (modalId === e.id && modalInputPwd.value !== e.data().pwd) {
      alert("비밀번호를 확인해주세요.");
    } else if (modalId === e.id && modalInputPwd.value === e.data().pwd) {
      const docRef = doc(db, "comment", e.id);
      await updateDoc(docRef, { comment: comment });
      modal.style.display = "none";
      alert("수정완료!");
      window.location.reload();
    }
  });
});

//모달창 삭제버튼
modalDeleteBtn.addEventListener("click", async function () {
  let inputPwd = $("#pwcheck").val();
  const modalId = modalInputPwd.dataset.commentId;
  let docs = await getDocs(collection(db, "comment"));
  docs.forEach(async (e) => {
    if (!inputPwd) {
      alert("비밀번호를 입력해주세요.");
    } else if (inputPwd !== e.data().pwd) {
      alert("비밀번호가 다릅니다!");
    } else if (modalId === e.id && inputPwd === e.data().pwd) {
      await deleteDoc(doc(db, "comment", e.id));
      alert("삭제완료!");
      window.location.reload();
    }
  });
});

//모달창 닫기 버튼
modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});
