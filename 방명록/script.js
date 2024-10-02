// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
import {
  query,
  orderBy,
  getDocs,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGP85Zm-SwMopKtBAnHX3nWrX4mWVf0Vk",
  authDomain: "sparta-af350.firebaseapp.com",
  projectId: "sparta-af350",
  storageBucket: "sparta-af350.appspot.com",
  messagingSenderId: "830711809085",
  appId: "1:830711809085:web:e8299b4cdb890078b25654",
  measurementId: "G-N6M1PKHYYL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let btn = document.querySelector("#save");

//댓글>파이어베이스
btn.addEventListener("click", async function () {
  let id = document.querySelector("#id").value;
  let pw = document.querySelector("#pw").value;
  let comment = document.querySelector("#commentValue").value;
  let timestamp = new Date();

  let doc = {
    id: id,
    pw: pw,
    comment: comment,
    timestamp: timestamp,
  };
  if (id == "" || pw == "" || comment == "") {
    alert("빈 칸에 입력하세요");
  } else {
    await addDoc(collection(db, "comments"), doc);
    alert("저장 완료!");

    document.querySelector("#id").value = "";
    document.querySelector("#pw").value = "";
    document.querySelector("#commentValue").value = "";
    window.location.reload();
  }
});

//댓글>화면
commentlist.innerHTML = "";

let q = query(collection(db, "comments"), orderBy("timestamp"));
let docs = await getDocs(q);

docs.forEach((doc) => {
  let row = doc.data();
  let id = row["id"];
  let comment = row["comment"];
  let commentlist = document.querySelector("#commentlist");
  let newli = document.createElement("li");
  let newbtn = document.createElement("button");
  let newbtn2 = document.createElement("button");
  newli.classList.add("newcomm");
  newbtn.classList.add("newbtn");
  newbtn.id = doc.id;
  newbtn2.classList.add("newbtn2");
  newbtn.innerText = "❌";
  newbtn2.innerText = "✏️";

  newli.textContent = `${id} : ${comment}`;

  newli.appendChild(newbtn);
  newli.appendChild(newbtn2);
  commentlist.appendChild(newli);
});

const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".close_btn");
const modalYes = document.querySelector(".yes_btn");

modalClose.addEventListener("click", function () {
  modal.classList.remove("on");
});

let removeBtn = document.querySelectorAll(".newbtn");
for (let index = 0; index < removeBtn.length; index++) {
  removeBtn[index].addEventListener("click", async function (e) {
    pwcheck.setAttribute("data-comment-id", removeBtn[index].id);
    modal.classList.add("on");
  });

  let docs = await getDocs(collection(db, "comments"));

  modalYes.addEventListener("click", async function () {
    docs.forEach(async (d) => {
      console.log(d.id);
      if (pwcheck === d.data().pw) {
        await deleteDoc(doc(db, "comments", d.id));
        alert("삭제 완료!");
        window.location.reload();
      } else if (!pwcheck) {
        alert("비밀번호를 입력하세요.");
      }
    });
  });
}
