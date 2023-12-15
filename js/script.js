"use strict";
const btnsEl = document.querySelectorAll(".btn");
const linksEl = document.querySelectorAll("ul li a");
const modalBody = document.querySelectorAll(".modal_body");
const blrEl = document.querySelector(".blr");
const btnRegister = document.querySelector(".btn_register");
const modalEl = document.querySelector(".modal");
const closeBtn = document.querySelector(".fa-close");

btnsEl.forEach((btn, indx) => {
    btn.addEventListener("click", () => {
      btnsEl.forEach((btnE) => btnE.classList.remove("active"));
      btn.classList.add("active");
      modalBody.forEach((mov) => mov.classList.remove("active"));
      modalBody[indx].classList.add("active");
    });
  });

  btnRegister.addEventListener("click", () => {
    modalEl.classList.add("active");
    blrEl.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    modalEl.classList.remove("active");
    blrEl.style.display = "none";
  });
  
  linksEl.forEach((link) => {
    link.addEventListener("click", () => {
      linksEl.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });