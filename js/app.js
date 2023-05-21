let searchButtons = document.querySelectorAll(".search .button");
const usernameElement = document.querySelector(".nameofuser .username");
const secondname = document.querySelector(".nameofuser .secondname");
const rightnav = document.querySelector(".right-nav");
const ofrightnav = document.querySelector(".right-nav .profile-picture");
let soundEffect = null; // Declare a variable to store the sound effect

searchButtons.forEach((button) => {
  let input = button.parentElement.querySelector(".input");
  button.addEventListener("click", function () {
    soundEffect = 0;
    fetch(`https://api.github.com/users/${input.value}`)
      .then((response) => response.json())
      .then((data) => {
        const leftside_info = document.querySelector(".leftside-info");
        const picture = leftside_info.querySelector("img");
        picture.classList.add("flipped");
        const userinfo = document.querySelector(".userinfo");
        const bio = userinfo.querySelector(".bio");
        const location = userinfo.querySelector(".location");

        bio.textContent = data.bio || "";
        location.textContent = data.location || " ";
        picture.src = data.avatar_url || "there's no photo";
        ofrightnav.src = data.avatar_url;
        usernameElement.textContent = data.name || "";
        secondname.textContent = data.login || "";
        userinfo.appendChild(bio);
        userinfo.appendChild(location);
        rightnav.appendChild(ofrightnav);
        picture.classList.remove("flipped");
        picture.classList.remove("flipped");
        bio.classList.remove("flipped");
        usernameElement.classList.remove("flipped");
        secondname.classList.remove("flipped");
        location.classList.remove("flipped");
        setTimeout(() => {
          picture.classList.add("flipped");
          bio.classList.add("flipped");
          usernameElement.classList.add("flipped");
          secondname.classList.add("flipped");
          location.classList.add("flipped");
        }, 10);
      });

    fetch(`https://api.github.com/users/${input.value}/repos`)
      .then((response) => response.json())
      .then((repositories) => {
        soundEffect = new Audio("../images/drop.mp3"); // Create a new sound effect instance

        const allrepoinfo = document.querySelector(".container-repos");
        allrepoinfo.innerHTML = "";

        for (let i = 0; i < repositories.length; i++) {
          const reposubject = document.createElement("div");
          reposubject.className = "all-repo-info";
          reposubject.style.border = "2px solid #d0d7de";
          reposubject.style.borderRadius = "16px";

          const repoLink = document.createElement("a");
          repoLink.href = repositories[i].html_url;
          repoLink.textContent = repositories[i].name;
          repoLink.setAttribute("target", "_blank");

          const publicSpan = document.createElement("span");
          publicSpan.className = "public";
          publicSpan.textContent = "Public";

          const topOfRepo = document.createElement("div");
          topOfRepo.className = "top-of-repo";
          topOfRepo.appendChild(repoLink);
          topOfRepo.appendChild(publicSpan);

          const botOfRepo = document.createElement("p");
          botOfRepo.className = "bot-of-repo";
          botOfRepo.textContent =
            repositories[i].language || "No specific language";
          reposubject.appendChild(topOfRepo);
          reposubject.appendChild(botOfRepo);
          allrepoinfo.appendChild(reposubject);

          reposubject.classList.remove("test");
          repoLink.classList.remove("test");
          botOfRepo.classList.remove("test");
          topOfRepo.classList.remove("test");

          setTimeout(() => {
            reposubject.classList.add("test");
            repoLink.classList.add("test");
            botOfRepo.classList.add("test");
            topOfRepo.classList.add("test");
            soundEffect.play(); // Play the sound effect when the repositories are displayed
          }, 1000 * i);
        }
      });
  });
});

const hamburgerIcon = document.querySelector(".humbrger");
const hamburgerMenu = document.querySelector(".responisve-humbrger");

function toggleHamburgerMenu() {
  if (hamburgerMenu.style.display === "none") {
    hamburgerMenu.style.display = "flex";
  } else {
    hamburgerMenu.style.display = "none";
  }
}

hamburgerIcon.addEventListener("click", toggleHamburgerMenu);

// Function to hide the hamburger menu when the screen size exceeds 769px
function hideHamburgerMenu() {
  if (window.innerWidth > 769) {
    hamburgerMenu.style.display = "none";
  }
}

window.addEventListener("resize", hideHamburgerMenu);
