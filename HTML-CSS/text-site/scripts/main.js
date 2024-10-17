class Website {
    constructor() {
        // by using a function called querySelector() to grab a reference to your heading, and then store it in a variable called myHeading
        this.headerText = document.querySelector("h1");
        this.header = document.querySelector(".header");
        this.img = document.getElementById("html-icon");
        this.darkModeToggle = document.getElementById("dark-mode-toggle");
        this.welcomeButton = document.getElementById("change-user-name");
        this.myMessage = document.querySelector(".welcome-message");
        this.nameArr = ["HTML - Hyper Text Markup Language", "CSS - Cascading Style Sheets", "JS - Java Script"];
        this.imageArr = ["images/html-icon.png", "images/css-icon.png", "images/js-icon.png"];
        this.index = 0;

        this.init()
    }

    changeHeader() {
        this.headerText.textContent = this.nameArr[this.index];
        this.img.src = this.imageArr[this.index];
        /*
        if(nameArr[this.index] === 'JS - Java Script') { img.style.width = "100px"; } 
        else { img.style.width = "50px"; } 
        */
       this.img.style.width = (this.nameArr[this.index] === 'JS - Java Script') ? "100px" : "50px";
    }

    toggleVisibility(element) {
        element.classList.add("hidden");
        setTimeout(() => {
            this.changeHeader();
            element.classList.remove('hidden');
        }, 200);
    }

    toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
        /*
        if (document.body.classList.contains("dark-mode")) {
            this.darkModeToggle.textContent = "Switch to Light Mode";
            localStorage.setItem("darkMode", "enabled");
        } else {
            this.darkModeToggle.textContent = "Switch to Dark Mode";
            localStorage.setItem("darkMode", "disabled");
        }
        */
        const modeText = (document.body.classList.contains("dark-mode")) ? "Switch to Light Mode" : "Switch to Dark Mode";
        this.darkModeToggle.textContent = modeText;
        localStorage.setItem("darkMode", this.document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
    }

    setUserName() {
        let myName = prompt("Please enter your name.");
        if (!myName) {
          this.setUserName();
        } else {
          localStorage.setItem("name", myName);
          this.myMessage.textContent = `Welcome to my website, ${myName}`;
        }
    }

    addEventListeners() {
        this.header.addEventListener('click', () => {
            this.index = (this.index + 1) % this.nameArr.length;
            this.toggleVisibility(this.headerText);
            this.toggleVisibility(this.img);
        });
        this.welcomeButton.addEventListener('click', () => this.setUserName());
        this.darkModeToggle.addEventListener('click', () => this.toggleDarkMode());
    }

    initializeDarkMode() {
        if (localStorage.getItem("darkMode") === "enabled") {
            document.body.classList.add("dark-mode");
            this.darkModeToggle.textContent = "Switch to Light Mode";
        }
    }

    init() {
        this.changeHeader();
        this.initializeDarkMode();
        this.addEventListeners();
    }
}

const myWebsite = new Website();