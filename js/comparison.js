let input = document.querySelector(".input");
let username = document.querySelector(".username");
let form = document.querySelector(".form");
let reponumber = document.querySelector(".reponumber");
let img = document.querySelector(".leftside img");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  fetch(`https://api.github.com/users/${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      username.innerHTML = data.name || data.login;
      img.src = data.avatar_url;
      reponumber.innerHTML = `Number Of Repos: ${data.public_repos}`;
    });
});

let formtwo = document.querySelector(".formtwo");
let inputtwo = document.querySelector(".inputtwo");
let usernametwo = document.querySelector(".usernametwo");
let reponumbertwo = document.querySelector(".reponumbertwo");
let imgtwo = document.querySelector(".leftside .imgtwo");

formtwo.addEventListener("submit", function (event) {
  event.preventDefault();

  fetch(`https://api.github.com/users/${inputtwo.value}`)
    .then((response) => response.json())
    .then((data) => {
      usernametwo.innerHTML = data.name || data.login;
      imgtwo.src = data.avatar_url;
      reponumbertwo.innerHTML = `Number Of Repos: ${data.public_repos}`;
    });
});

let button = document.querySelector(".button");
button.addEventListener("click", function () {
  if (inputtwo.value !== "" && input.value !== "") {
    if (
      parseInt(reponumbertwo.innerHTML.split(" ")[3]) >
      parseInt(reponumber.innerHTML.split(" ")[3])
    ) {

      alert(inputtwo.value + " is the winner");
    } else {
      button.style.display = "none";

      alert(input.value + " is the winner");
    }
  } else {
    alert("Please enter a value");
  }
});
