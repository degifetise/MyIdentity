//back to top button function

const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.onclick = function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

const scrollBottom = document.getElementById("scroll-bottom");
window.onscroll = function () {
  if (window.innerHeight + window.scrollY < document.body.offsetHeight) {
    scrollBottom.style.display = "block";
  } else {
    scrollBottom.style.display = "none";
  }
};

scrollBottom.onclick = function () {
  window.scroll({
    top: document.body.scrollHeight,
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
  { threshold: 0.3 },
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
  "Online Tutorial Teach",
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;


function typeEffect() {
  const currentRole = roles[roleIndex];
  const spanClass = `role-${roleIndex}`;

  if (!isDeleting && charIndex < currentRole.length) {
    typingElement.innerHTML = `<span class="${spanClass}">${currentRole.substring(0, charIndex + 1)}</span>`;
    charIndex++;
    setTimeout(typeEffect, 50);
  } else if (isDeleting && charIndex > 0) {
    typingElement.innerHTML = `<span class="${spanClass}">${currentRole.substring(0, charIndex - 1)}</span>`;
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
    } else {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeEffect, 50);
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
  {
    id: 5,
    name: "Dashboard",
    image: "/image/Dash.jpeg",
    overlay: "Responsive single-file dashboard with cart and charts",
    techStack: ["HTML", "CSS", "JavaScript", "GSAP"],
    github: "https://github.com/degifetise/ecommercedashboards",
    live: "https://ecommercedashboards.vercel.app/",
  },
  {
    id: 6,
    name: "Lost & Found Web App",
    image: "/image/image.png",
    description:
      "A modern web app that allows users to post lost or found items, search products, filter by category, and contact item owners. Includes authentication, modals, and smooth GSAP animations.",
    techStack: ["HTML", "Tailwind CSS", "JavaScript", "GSAP"],
    github: "https://github.com/degifetise/LostFoundItem",
    live: "https://lost-found-item-tau.vercel.app/",
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



//people review 

const reviews = [
  {
    text: "Degife delivered our dashboard project in record time with clean, modular code.",
    author: "John joseph",
    photo: "/images/noorain.jpg",
  },
  {
    text: "His UI/UX designs are intuitive and responsive. Students loved the workshop.",
    author: "HUWAI Programs Group",
    photo: "/images/huwai.jpg",
  },
  {
    text: "Professional, reliable, and creative. Highly recommended for freelance projects.",
    author: "Peace Club Member",
    photo: "/images/peaceclub.jpg",
  },
];


const wrapper = document.getElementById("review-wrapper");

reviews.forEach((review) => {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";
  slide.innerHTML = `
    <div class="review-card">
      <img src="${review.photo}" alt="${review.author}" class="review-photo"/>
      <p>"${review.text}"</p>
      <h4>- ${review.author}</h4>
    </div>
  `;
  wrapper.appendChild(slide);
});


var swiper = new Swiper(".mySwiper", {
  loop: true,
  effect: "fade", // smooth fade transition
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 4000, // 4 seconds delay
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
