// const username = "Mohammad-Abdelhadi";
const username = "Mohammad-Abdelhadi";
// const username = "Karim-a-khaled";
// const username = "baselmq";

// username = "majdJadallah ";
// username = "shahedalazzam ";
// username = "AyhamZaid ";
let token = "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";

fetch(`https://api.github.com/users/${username}`, {
  headers: { Authorization: `token ${token}` },
})
  .then((response) => response.json())
  .then((data) => {
    const leftside_info = document.querySelector(".leftside-info");
    const picture = leftside_info.querySelector("img");
    const userinfo = document.querySelector(".userinfo");
    const bio = userinfo.querySelector(".bio");
    const location = userinfo.querySelector(".location");

    bio.textContent = data.bio || "";
    location.textContent = data.location || "";
    picture.src = data.avatar_url;

    const usernameElement = document.querySelector(".nameofuser .username");
    usernameElement.textContent = data.name;

    const secondname = document.querySelector(".nameofuser .secondname");
    secondname.textContent = data.login;
    userinfo.appendChild(bio);
    userinfo.appendChild(location);
    return fetch(data.repos_url);
  })
  .then((response) => response.json())
  .then((repositories) => {
    const allrepoinfo = document.querySelector(".container-repos"); // Assuming there's only one element with the class "all-repo-info"
    for (let i = 0; i < repositories.length; i++) {
      const reposubject = document.createElement("div");
      const repoLink = document.createElement("a");
      repoLink.href = ""; // Set the repository URL here
      repoLink.textContent = repositories[i].name;

      const publicSpan = document.createElement("span");
      publicSpan.className = "public";
      publicSpan.textContent = "Public";

      const topOfRepo = document.createElement("div");
      topOfRepo.className = "top-of-repo";
      topOfRepo.appendChild(repoLink);
      topOfRepo.appendChild(publicSpan);

      const botOfRepo = document.createElement("p");
      botOfRepo.className = "bot-of-repo";
      botOfRepo.textContent = repositories[i].language; // Assuming you want to display the repository's language

      reposubject.appendChild(topOfRepo);
      reposubject.appendChild(botOfRepo);

      allrepoinfo.appendChild(reposubject);
    }
  });
