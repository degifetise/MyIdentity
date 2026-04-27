//back to top button function

const backToTop = document.getElementById("backToTop");
window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

backToTop.onclick = function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

//all section animation
const sections = document.querySelectorAll(".reveal");
const navLinks = document.querySelectorAll(".nav-links a");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");

      if (entry.isIntersecting) {
        entry.target.classList.add("active");

        /*    observer.unobserve(entry.target); */

        navLinks.forEach((link) => {
          link.classList.remove("active-navbar");

          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active-navbar");
          }
        });
      }
    });
  },
  { threshold: 0.1 },
);

sections.forEach((section) => {
  observer.observe(section);
});
//typing text animation

const typingElement = document.getElementById("typing");
const roles = [
  "Frontend developer",
  "UI/UX Designer",
  "Open Source Contributor",
  "Online Tutor",
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  if (!isDeleting && charIndex < roles[roleIndex].length) {
    typingElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    if (!isDeleting && charIndex === roles[roleIndex].length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
    } else {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeEffect, 10);
    }
  }
}
typeEffect();

//light and dark toggle //
const lightTheme = document.querySelector(".theme-toggle");
const lightIcon = lightTheme.querySelector("i");
const body = document.body;
if (lightTheme) {
  lightTheme.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      lightTheme.innerHTML = ` <i class="fas fa-sun"></i>`;
    } else {
      body.classList.add("dark");
      lightTheme.innerHTML = ` <i class="fas fa-moon"></i>`;
    }
  });
}
//skill useLayoutEffect(() => {
const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Git",
  "Github",
  "PHP",
  "MYSQL",
  "Tailwind",
  "OOP Java",
];
//skill language list

const skillListContainer = document.querySelector(".skill-list");
skills.forEach((skill) => {
  let span = document.createElement("span");
  span.textContent = skill;

  skillListContainer.appendChild(span);
});

//nav bar section //

const navList = document.querySelector(".nav-links");
const navBar = document.querySelector(".bar");

navBar.addEventListener("click", () => {
  navList.classList.toggle("active");
});

//project list//

const projects = [
  {
    id: 1,
    name: "E-commerce websites",
    image: "/image/E-commerce.png",
    overlay: "This is overlay text",
    techStack: ["CSS", "javascript", "React"],
    github: "https://github.com/degifetise/ecommerce-react-course-websites",
    live: "https://ecommerce-react-course-websites.vercel.app/",
  },

  {
    id: 2,
    name: "Movie search app",
    image: "/image/movie.jpeg",
    overlay: "This is overlay text",
    techStack: ["React", "CSS", "javascript", "OMDb API"],
    github: "https://github.com/degifetise/movie-app",
    live: "https://movie-app-rho-ivory.vercel.app/",
  },

  {
    id: 3,
    name: "Educational websites",
    image: "/image/Educational websites.jpeg",
    overlay: "This is overlay text",
    techStack: ["HTML", "CSS", "javascript", "email.js"],
    github: "https://github.com/degifetise/hawasa-eagle-turoial-websites",
    live: "https://hawasa-eagle-turoial-websites.vercel.app",
  },

  {
    id: 4,
    name: "Modern e-commerce websites",
    image: "/image/techGadget.png",
    overlay: "This is overlay text",
    techStack: ["HTML", "CSS", "javascript"],
    github: "https://github.com/degifetise/Market-Online",
    live: "https://market-online-pi.vercel.app/",
  },
];

const projectGrid = document.querySelector(".project-card-grid");

projects.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  const name = document.createElement("h3");
  name.classList.add("project-title-solutions");
  name.textContent = project.name;

  //image container
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("project-image");
  const img = document.createElement("img");
  img.src = project.image;
  img.alt = project.name;
  imageContainer.appendChild(img);

  //tech stack
  const techStackDiv = document.createElement("div");
  techStackDiv.classList.add("tech-stack");
  project.techStack.forEach((tech) => {
    const span = document.createElement("span");
    span.classList.add("tech");

    span.textContent = tech;
    techStackDiv.appendChild(span);
  });

  //github and live links of projects //
  const projectLink = document.createElement("div");
  projectLink.classList.add("project-links");

  const github = document.createElement("a");
  github.href = project.github;
  github.textContent = "Github";
  github.target = "_blank";

  const live = document.createElement("a");
  live.href = project.live;
  live.textContent = "Live";
  live.target = "_blank";
  projectLink.appendChild(github);
  projectLink.appendChild(live);

  //append all elements in project card//

  projectCard.appendChild(name);
  projectCard.appendChild(imageContainer);
  projectCard.appendChild(techStackDiv);
  projectCard.appendChild(projectLink);

  projectGrid.appendChild(projectCard);
});

//contact form //

(function () {
  emailjs.init("IpJLXRiFrh7P-J5ky");
})();

const form = document.getElementById("contact-form");
const message = document.querySelector(".message");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = form.elements["name"];
  const email = form.elements["email"];
  const subject = form.elements["title"];
  const msg = form.elements["message"];

  if (!name || !email || !msg || !message) {
    message.innerHTML = "Please fill all required fields.";
    message.style.color = "red";

    setTimeout(() => {
      message.innerHTML = "";
    }, 3000);
    return;
  }
  emailjs
    .sendForm("service_ug2bykh", "template_gdknl0l", this)
    .then(() => {
      message.innerHTML = "Message sent successfully!";
      message.style.color = "green";
      setTimeout(() => {
        message.innerHTML = "";
        form.reset();
      }, 3000);
    })
    .catch((error) => {
      message.innerHTML = "Failed to send message.";
      message.style.color = "red";
      setTimeout(() => {
        message.innerHTML = "";
        form.reset();
      }, 3000);

      console.log(error);
    });
});

//day //

const copyRight = document.querySelector(".copyright");
const day = new Date();
const year = day.getFullYear();
copyRight.innerHTML = year;
