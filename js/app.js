

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

