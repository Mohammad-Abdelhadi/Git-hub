// const accessToken = "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";
// const username = "Mohammad-Abdelhadi";

// fetch(`https://api.github.com/users/${username}`, {
// //   headers: {
// //     Authorization: `token ${accessToken}`,
// //   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     // Update profile information
//     const profileElement = document.getElementById("profile");
//     const profileImg = profileElement.querySelector("img");
//     const profileName = profileElement.querySelector("h2");
//     // const profileBio = profileElement.querySelectorAll("p");

//     profileImg.src = data.avatar_url;
//     profileName.textContent =  data.login;

//     const bio = data.bio || "No bio provided";
//     const bioElement = document.createElement("p");
//     bioElement.textContent = `Bio: ${bio}`;
//     profileElement.appendChild(bioElement);

//     const repositoriesCount = data.public_repos;
//     const repositoriesCountElement = document.createElement("p");
//     repositoriesCountElement.textContent = `Repositories: ${repositoriesCount}`;
//     profileElement.appendChild(repositoriesCountElement);

//     // Fetch repositories
//     return fetch(data.repos_url);
//   })
//   .then((response) => response.json())
//   .then((repositories) => {
//     const repositoriesElement = document.getElementById("repositories");

//     repositories.forEach((repository) => {
//       const repositoryElement = document.createElement("div");
//       repositoryElement.classList.add("repository");

//       const repositoryName = document.createElement("h3");
//       repositoryName.textContent = repository.name;

//       const repositoryDescription = document.createElement("p");
//       repositoryDescription.textContent =
//         repository.description || "No description provided";

//       const repositoryLanguage = document.createElement("p");
//       repositoryLanguage.textContent = `Language: ${
//         repository.language || "Not specified"
//       }`;

//       const repositoryStars = document.createElement("p");
//       repositoryStars.textContent = `Stars: ${repository.stargazers_count}`;

//       repositoryElement.appendChild(repositoryName);
//       repositoryElement.appendChild(repositoryDescription);
//       repositoryElement.appendChild(repositoryLanguage);
//       repositoryElement.appendChild(repositoryStars);

//       repositoriesElement.appendChild(repositoryElement);
//     });
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// my code _______________
const accessToken = "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";
const username = "Mohammad-Abdelhadi";
// const username = "Karim-a-khaled";

fetch(`https://api.github.com/users/${username}`, {
  //   headers: {
  //     Authorization: `token ${accessToken}`,
  //   },
})
  .then((response) => response.json())
  .then((data) => {
    const leftside_info = document.querySelector(".leftside-info");
    const picture = leftside_info.querySelector("img");
    const userinfo = document.querySelector(".userinfo");
    const bio = userinfo.querySelector(".bio");
    const location = userinfo.querySelector(".location");

    bio.textContent = data.bio || "There's No Bio!";
    location.textContent = data.location || "There's No Location";
    picture.src = data.avatar_url;

    const username = document.querySelector(".nameofuser .username");
    username.textContent = data.name;

    const secondname = document.querySelector(".nameofuser .secondname");
    secondname.textContent = data.login;
    nameofuser.appendChild(username);
    userinfo.appendChild(bio);
    userinfo.appendChild(location);
});

    // Append the modified elements

