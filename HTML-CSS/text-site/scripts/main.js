// by using a function called querySelector() to grab a reference to your heading, and then store it in a variable called myHeading
const headerText = document.querySelector("h1");
const header = document.querySelector(".header");
const img = document.getElementById("html-icon");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const welcomeButton = document.getElementById("change-user-name");
const myMessage = document.querySelector(".welcome-message");
const nameArr = ["HTML - Hyper Text Markup Language", "CSS - Cascading Style Sheets", "JS - Java Script"];
const imageArr = ["images/html-icon.png", "images/css-icon.png", "images/js-icon.png"];
let index = 0;


headerText.textContent = nameArr[index];
img.src = imageArr[index];

header.addEventListener("click", () => {
    index = (index + 1) % nameArr.length;

    // hide current text and image
    headerText.classList.add('hidden');
    img.classList.add('hidden');
    
    setTimeout(() => {
        headerText.textContent = nameArr[index];
        img.src = imageArr[index];

        headerText.classList.remove('hidden');
        img.classList.remove('hidden');

        if(nameArr[index] === 'JS - Java Script') {
            img.style.width = "100px";
        } else {
            img.style.width = "50px";
        }
    }, 200)
});


function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myMessage.textContent = `Welcome to my website, ${myName}`;
    }
}
  
welcomeButton.onclick = () => {
    setUserName();
};  


if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.textContent = "Switch to Light Mode";
}

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = "Switch to Light Mode";
        localStorage.setItem("darkMode", "enabled");
    } else {
        darkModeToggle.textContent = "Switch to Dark Mode";
        localStorage.setItem("darkMode", "disabled");
    }
});