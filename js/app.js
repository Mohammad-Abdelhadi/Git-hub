let divsearch = document.querySelector(".search");
let input = divsearch.querySelector(".input");
let button = divsearch.querySelector(".button");

const usernameElement = document.querySelector(".nameofuser .username");
const secondname = document.querySelector(".nameofuser .secondname");
const rightnav = document.querySelector(".right-nav ");
const ofrightnav = rightnav.querySelector(".profile-picture");

button.addEventListener("click", function () {
  fetch(`https://api.github.com/users/${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      const leftside_info = document.querySelector(".leftside-info");
      const picture = leftside_info.querySelector("img");
      const userinfo = document.querySelector(".userinfo");
      const bio = userinfo.querySelector(".bio");
      const location = userinfo.querySelector(".location");

      bio.textContent = data.bio || "";
      location.textContent = data.location || " ";
      picture.src = data.avatar_url || " theres not photo";
      ofrightnav.src = data.avatar_url;
      usernameElement.textContent = data.name || "";
      secondname.textContent = data.login || "";

      userinfo.appendChild(bio);
      userinfo.appendChild(location);
      rightnav.appendChild(ofrightnav);
    });

  fetch(`https://api.github.com/users/${input.value}/repos`)
    .then((response) => response.json())
    .then((repositories) => {
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
      }
    });
});
