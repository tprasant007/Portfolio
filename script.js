import {skillsArr, projectsArr} from "./projects.js";

const projectsContainer = document.getElementById("projects-container");
const menuBtn = document.querySelector(".menu-btn");
const header = document.querySelector("header");
const skillsContainer = document.querySelector(".skills-slider-container");

let skillDetails = "";
let projectDetails = "";

// for displaying skills
skillsArr.forEach(skill => {
  skillDetails += `
    <figure class="skills-image flex-column">
            <img
              src=${skill.src}
              alt="skill image"
              class="skills-image"
            />
            <figcaption>${skill.name}</figcaption>
          </figure>
  `
})

skillsContainer.innerHTML = skillDetails;

// for displaying projects
projectsArr.forEach(project => {
  projectDetails += `
    <div class="project flex-column">
    <img src=${project.image_src} alt="project" class="project-img">
    <p class="project-name">${project.name}</p>
    <div class="project-links hide-link">
      <a href=${project.live_demo} target="_blank"><i class="fa fa-external-link"></i></a>
      <a href=${project.github_repo} target="_blank"><i class="fa fa-github"></i></a>
    </div>
  </div>
    `;
});

projectsContainer.innerHTML = projectDetails;

// get all project divs
const projects = document.querySelectorAll(".project");

// add event listener for project divs
projects.forEach((project) => {
  const projectLinks = project.querySelector(".project-links");

  // mouse enter handler
  project.addEventListener("mouseenter", (e) => {
    projectLinks.classList.remove("hide-link");
  });

  //mouse leave handler
  project.addEventListener("mouseleave", () => {
    projectLinks.classList.add("hide-link");
  });
});


menuBtn.onclick = () => {
  header.classList.toggle("show")
}