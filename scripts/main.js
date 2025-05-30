const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/DryRock-min.png") {
    myImage.setAttribute("src", "images/stopnswop.jpg");
  } else {
    myImage.setAttribute("src", "images/DryRock-min.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `DryRock is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `DryRock is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
