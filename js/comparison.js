let form = document.querySelector(".form");
let input = document.querySelector(".input");
let username = document.querySelector(".username");
let img = document.querySelector(".leftside img");
let reponumber = document.querySelector(".reponumber");

input.addEventListener("input", function () {
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
let imgtwo = document.querySelector(".leftside .imgtwo");
let reponumbertwo = document.querySelector(".reponumbertwo");

inputtwo.addEventListener("input", function () {
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
      // Add celebration animation to winner
      const start = () => {
        setTimeout(function () {
          for (let i = 0; i < 6; i++) {
            confetti.start();
          }
        }, 100);
      };

      start();

      // Show confetti
      for (let i = 0; i < 6; i++) {
        confetti();
      }

      Swal.fire(inputtwo.value + " Is winner", "Congratulations!", "success");
    } else {
      // Hide loser
      // Add celebration animation to winner

      Swal.fire(input.value + " Is winner", "Congratulations!", "success");

      const start = () => {
        setTimeout(function () {
          for (let i = 0; i < 6; i++) {
            confetti.start();
          }
        }, 100);
      };

      start();

      // Show confetti
      for (let i = 0; i < 6; i++) {
        confetti();
      }
    }
  } else {
    Swal.fire({
      title: "Please Enter Value",
      icon: "error",
      confirmButtonText: "Ok",
    });
  }
});
