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
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");

     /*    observer.unobserve(entry.target); */
      }
    });
  },
  { threshold: 0.2 },
);

sections.forEach((section) => {
  observer.observe(section);
});

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
    github: "https://github.com/your-repo",
    live: "https://your-site.vercel.app",
  },

  {
    id: 2,
    name: "Movie search app",
    image: "/image/movie.jpeg",
    overlay: "This is overlay text",
    techStack: ["React", "CSS", "javascript", "OOdbe API"],
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
    name: "My Personal Portfolio",
    image: "/image/Screenshot_17-4-2026_135357_127.0.0.1.jpeg",
    overlay: "This is overlay text",
    techStack: ["HTML", "CSS", "javascript", "email.js"],
    github: "https://github.com/degifetise/hawasa-eagle-turoial-websites",
    live: "https://hawasa-eagle-turoial-websites.vercel.app",
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
  emailjs.init({
    publicKey: "coKezY5VjE2p6lg7R",
  });
})();

const form = document.getElementById("contact-form");
const message = document.querySelector(".message");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!form.name.value || !form.email.value || !form.message.value) {
    message.innerHTML = "Please fill all required fields.";
    message.style.color = "red";

    setTimeout(() => {
      message.innerHTML = "";
    }, 3000);
  }
  emailjs
    .sendForm("service_ug2bykh", "template_4mvioyd", this)
    .then(() => {
      message.innerHTML = "Message sent successfully!";
      message.style.color = "green";
      setTimeout(() => {
        message.innerHTML = "";
      }, 3000);

      form.reset();
    })
    .catch((error) => {
      message.innerHTML = "Failed to send message.";
      message.style.color = "red";
      setTimeout(() => {
        message.innerHTML = "";
      }, 3000);

      console.log(error);
    });
});

//day //

const copyRight = document.querySelector(".copyright");
const day = new Date();
const year = day.getFullYear();
copyRight.innerHTML = year;
