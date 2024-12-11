// for my typing effect
var typed = new Typed('#element', {
    strings: ['MCA Student', 'Software Developer', 'Web Developer', 'Gamer', 'Programmer.'],
    typeSpeed: 50,
});

var types = new Typed('.projectbio', {
    strings: ['Gaming Website', 'To-do List', 'Real-time Character Counter', 'Shopping Website', 'Here are some Minor Projects'],
    typeSpeed: 90,
    loop: true,
   
});


// Toggle Hamburger Menu
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    
    hamburger.classList.toggle('active');  
    menu.classList.toggle('active');    
}

const languageData = {
    "c-card": {
        title: "C Language",
        description: "C is a procedural programming language designed for system programming and application development. Known for its speed and efficiency, C provides low-level memory access and portability, making it a foundation for many modern languages."
    },
    "java-card": {
        title: "Java",
        description: "Java is an object-oriented programming language known for its 'write once, run anywhere' capability. It is widely used in web, mobile, and enterprise development due to its portability, robust security, and extensive library support."
    },
    "html-card": {
        title: "HTML",
        description: "HTML is the backbone of web pages, structuring content with elements like headings, links, and images. It works with CSS and JavaScript to create dynamic and visually appealing websites."
    },
    "css-card": {
        title: "CSS",
        description: "CSS is used to design and style web pages, controlling layout, colors, fonts, and responsiveness. It enhances the visual appeal of HTML and supports modern web design practices like animations and responsive layouts."
    },
    "js-card": {
        title: "JavaScript",
        description: "JavaScript is a client-side scripting language that brings interactivity to web pages. It powers features like form validation, animations, and real-time updates, and supports modern frameworks for building advanced web applications."
    }
};

const cards = document.querySelectorAll(".language-card");
const infoBox = document.querySelector(".language-info");
const titleElement = document.getElementById("language-title");
const descriptionElement = document.getElementById("language-description");

cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        const language = languageData[card.id];
        titleElement.textContent = language.title;
        descriptionElement.textContent = language.description;

        const rect = card.getBoundingClientRect();
        infoBox.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
        infoBox.style.top = `${rect.top + window.scrollY - 10}px`; 

        infoBox.style.display = "block";
    });

    card.addEventListener("mouseleave", () => {
        infoBox.style.display = "none";
    });
});
// click home to return top :-) 
document.getElementById('home-link').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});

function showAboutMe() {
    const aboutBox = document.getElementById('aboutBox');
    aboutBox.style.display = aboutBox.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('click', function(event) {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
   
    if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove('active');  
        hamburger.classList.remove('active');  
    }

    const aboutBox = document.getElementById('aboutBox');
    const aboutBtn = document.getElementById('aboutBtn');


    if (aboutBox.style.display === 'block' && !aboutBox.contains(event.target) && event.target !== aboutBtn) {
        aboutBox.style.display = 'none';
    }
});

document.getElementById('aboutBtn').addEventListener('click', function () {
    const aboutBox = document.getElementById('aboutBox');
    aboutBox.style.display = aboutBox.style.display === 'block' ? 'none' : 'block';
});


document.getElementById('aboutBtn1').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'cv_sandip.docx';
    link.download = 'cv_sandip.docx';
    link.click();
});

const prevEle = document.querySelector(".prev")
const nextEle = document.querySelector(".next")
const imgContainerEle = document.querySelector(".img-container")
const imgEle = document.querySelectorAll(".pr-img")

let currImg = 1;
let timeout;

nextEle.addEventListener("click", ()=> {
    currImg++
    clearInterval(timeout)
    updateImg()
});

prevEle.addEventListener("click", ()=> {
    currImg--
    clearTimeout(timeout)
    updateImg()
});

updateImg()

function updateImg(){
    if(currImg > imgEle.length){
        currImg = 1
    } else if(currImg < 1){
        currImg = imgEle.length
    }
    imgContainerEle.style.transform = `translateX(${-(currImg - 1) * 100}%)`;

    timeout = setTimeout(()=>{
        currImg++
        updateImg()
    }, 2000);
}

// for my dark theme
const themeBtn = document.getElementById("theme-btn");
    const darkTheme = document.querySelectorAll(".dark-theme");
    themeBtn.onclick = () => {
      themeBtn.classList.toggle("fa-sun");
      if (themeBtn.classList.contains("fa-sun")) {
        document.body.classList.add("changeTheme");
        for (const theme of darkTheme) {
          theme.style.backgroundColor = "#1D1E22";
          theme.style.color = "#eee";
        }
      } else {
        document.body.classList.remove("changeTheme");
        for (const theme of darkTheme) {
          theme.style.backgroundColor = "#eee";
          theme.style.color = "#1D1E22";
        }
      }
    }

    function toggleTheme() {
        document.body.classList.toggle('dark-theme'); 
        const aboutBox = document.querySelector('.about-box');
        aboutBox.classList.toggle('dark-theme'); 
        const languageCards = document.querySelectorAll('.language-card');
    languageCards.forEach(card => card.classList.toggle('dark-theme'));

    const languageCardInfo = document.querySelectorAll('.language-info');
    languageCardInfo.forEach(card => card.classList.toggle('dark-theme'));
    const educationBoxes = document.querySelectorAll('.education .box');
    educationBoxes.forEach(box => box.classList.toggle('dark-theme'));

    const themeIcon = document.getElementById('theme-btn');
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('far', 'fa-moon');
        themeIcon.classList.add('fas', 'fa-sun'); 
    } else {
        themeIcon.classList.remove('fas', 'fa-sun');
        themeIcon.classList.add('far', 'fa-moon'); 
    }
       
    }
    