const box = document.querySelector(".box");

document.addEventListener("keydown", (e) => {
  let keyName = e.keyCode === 32 ? "Space" : e.key;
  box.querySelector(".keyCode").innerText = e.keyCode;
  box.querySelector(".keyName").innerText = keyName.toUpperCase();
  box.querySelector(".key span").innerText = keyName;
  box.querySelector(".code span").innerText = e.keyCode;
  box.classList.add("active");
});
