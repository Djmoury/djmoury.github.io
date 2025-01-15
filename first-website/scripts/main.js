const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/mozilla.jpeg") {
    myImage.setAttribute("src", "images/flower.jpeg");
  } else {
    myImage.setAttribute("src", "images/mozilla.jpeg");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName){
        setUserName();
    }else{
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome, ${myName}`;
    }
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome, ${storedName}`;
  }

  myButton.addEventListener("click", () => {
    setUserName();
  });