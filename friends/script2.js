"use strict";

const btn = document.querySelector(".btn");

const itemsLeft = document.querySelector(".items-left");
const liLefts = itemsLeft.getElementsByTagName("li");

const itemsRight = document.querySelector(".items-right");
const liRights = itemsRight.getElementsByTagName("li");

btn.addEventListener("click", () => {
  const randomCardLeft = Math.floor(Math.random() * liLefts.length);
  let liLeft = liLefts[randomCardLeft];
  console.log(randomCardLeft);
  //  liLeft.classList.add("newLeft");
  let nameLeft = liLeft.className;
  if (nameLeft.includes("checked")) {
    liLeft.classList.remove("checked");
  } else {
    liLeft.classList.add("checked");
  }

  const randomCardRight = Math.floor(Math.random() * liRights.length);
  let liRight = liRights[randomCardRight];
  console.log(randomCardRight);
  //  liRight.classList.add("newRight");
  let nameRight = liRight.className;
  if (nameRight.includes("checked")) {
    liRight.classList.remove("checked");
  } else {
    liRight.classList.add("checked");
  }

  if (randomCardLeft == randomCardRight) {
    alert("berabere");
  } else if ((randomCardLeft === 0) & (randomCardRight === 1)) {
    alert("paper");
  } else if ((randomCardLeft === 0) & (randomCardRight === 2)) {
    alert("rock");
  } else if ((randomCardLeft === 0) & (randomCardRight === 3)) {
    alert("rock");
  } else if ((randomCardLeft === 0) & (randomCardRight === 4)) {
    alert("water balloon");
  } else if ((randomCardLeft === 1) & (randomCardRight === 0)) {
    alert("paper");
  } else if ((randomCardLeft === 1) & (randomCardRight === 2)) {
    alert("scissors");
  } else if ((randomCardLeft === 1) & (randomCardRight === 3)) {
    alert("fire");
  } else if ((randomCardLeft === 1) & (randomCardRight === 4)) {
    alert("water balloon");
  } else if ((randomCardLeft === 2) & (randomCardRight === 0)) {
    alert("rock");
  } else if ((randomCardLeft === 2) & (randomCardRight === 1)) {
    alert("scissors");
  } else if ((randomCardLeft === 2) & (randomCardRight === 3)) {
    alert("fire");
  } else if ((randomCardLeft === 2) & (randomCardRight === 4)) {
    alert("water balloon");
  } else if ((randomCardLeft === 3) & (randomCardRight === 0)) {
    alert("rock");
  } else if ((randomCardLeft === 3) & (randomCardRight === 1)) {
    alert("fire");
  } else if ((randomCardLeft === 3) & (randomCardRight === 2)) {
    alert("fire");
  } else if ((randomCardLeft === 3) & (randomCardRight === 4)) {
    alert("water balloon");
  } else if ((randomCardLeft === 4) & (randomCardRight === 0)) {
    alert("water balloon");
  } else if ((randomCardLeft === 4) & (randomCardRight === 1)) {
    alert("water balloon");
  } else if ((randomCardLeft === 4) & (randomCardRight === 2)) {
    alert("water balloon");
  } else if ((randomCardLeft === 4) & (randomCardRight === 3)) {
    alert("water balloon");
  }

  /*
if (liLeft.style.display = "flex") {
    setTimeout(function() {
        liLeft.classList.remove('newRight');
        liLeft.style.display = "none";
        liLeft.style.transition = ".3s ease all";
    }, 3000);
}

if (liRight.style.display = "flex") {
    setTimeout(function() {
        liRight.style.display = "none";
        liRight.classList.remove('newLeft');
        liRight.style.transition = ".3s ease all";
    }, 3000);
}
*/

});

//kartlar aynı hızda çıkmıyorlar ve aynı indis üst üste gilnce tekrar çıkmıyor kart
