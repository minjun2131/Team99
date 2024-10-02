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

$(".add_btn").click(async function () {
  let comment = $(".input_comment").val();
  let pwd = $(".input_pwd").val();

  let doc = {
    comment: comment,
    pwd: pwd,
    timeStamp: new Date().getTime(),
  };
  if (!comment) {
    alert("댓글을 입력하세요.");
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
  let comment = row["comment"];
  let temp_html = `
          <div id="user_comment_box">
        <div id="user_comment_info">
          <span id="user_comment">${comment}</span>
        </div>
        <div id="remove_btn_box">       
        <button class="modify_btn" id="${id}">수정</button>      
        <button class="remove_btn" id="${id}">제거</button>          
        </div>
      </div>`;
  $(".info_comment").append(temp_html);
});

const removeBtn = document.querySelectorAll(".remove_btn");
for (let index = 0; index < removeBtn.length; index++) {
  removeBtn[index].addEventListener("click", async function (e) {
    const userId = e.target.id;
    let docs = await getDocs(collection(db, "comment"));
    docs.forEach(async (e) => {
      if (userId === e.id) {
        await deleteDoc(doc(db, "comment", e.id));
        alert("삭제완료!");
        window.location.reload();
      }
    });
  });
}

const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".close_btn");
const modifyBtn = document.querySelectorAll(".modify_btn");
const modalInput = document.querySelector(".modal_input");

for (let index = 0; index < modifyBtn.length; index++) {
  modifyBtn[index].addEventListener("click", function () {
    modalInput.setAttribute("data-comment-id", modifyBtn[index].id);
    modal.style.display = "block";
  });
}

modalClose.addEventListener("click", async function () {
  let comment = $(".modal_input").val();
  const modalId = modalInput.dataset.commentId;
  let docs = await getDocs(collection(db, "comment"));
  docs.forEach(async (e) => {
    if (modalId === e.id) {
      const docRef = doc(db, "comment", e.id);
      await updateDoc(docRef, { comment: comment });
      modal.style.display = "none";
      alert("수정완료!");
      window.location.reload();
    }
  });
});
