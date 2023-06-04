let input = document.querySelector(".form .input");
let username = document.querySelector(".username");
let img = document.querySelector(".leftside img");
let reponumber = document.querySelector(".reponumber");

input.addEventListener("input", function () {
  fetch(`https://api.github.com/users/${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      username.innerHTML = data.name || data.login;
      img.src = data.avatar_url;
      reponumber.innerHTML = `Repositories: ${data.public_repos}`;
    });
});

let inputtwo = document.querySelector(".formtwo .inputtwo");
let usernametwo = document.querySelector(".usernametwo");
let imgtwo = document.querySelector(".leftside .imgtwo");
let reponumbertwo = document.querySelector(".reponumbertwo");

inputtwo.addEventListener("input", function () {
  fetch(`https://api.github.com/users/${inputtwo.value}`)
    .then((response) => response.json())
    .then((data) => {
      usernametwo.innerHTML = data.name || data.login;
      imgtwo.src = data.avatar_url;
      reponumbertwo.innerHTML = `Repositories: ${data.public_repos}`;
    });
});

// Add the following function to repeat the confetti effect multiple times
function repeatConfetti() {
  for (let i = 0; i < 15; i++) {
    confetti();
  }
}

let button = document.querySelector(".button");
button.addEventListener("click", function () {
  if (inputtwo.value !== "" && input.value !== "") {
    const repoCount1 = parseInt(reponumber.innerHTML.split(":")[1]);
    const repoCount2 = parseInt(reponumbertwo.innerHTML.split(":")[1]);

    if (repoCount2 > repoCount1) {
      Swal.fire({
        title: `${usernametwo.innerHTML} <span style="color: green;">is the winner!</span>`,
        text: "Congratulations!",
        icon: "success",
      });

      repeatConfetti(); // Repeat the confetti effect
    } else if (repoCount1 > repoCount2) {
      Swal.fire({
        title: `${username.innerHTML} <span style="color: green;">is the winner!</span>`,
        text: "Congratulations!",
        icon: "success",
      });

      repeatConfetti(); // Repeat the confetti effect
    } else {
      Swal.fire(
        "It's a tie!",
        "Both users have the same number of repositories.",
        "info"
      );
    }
  } else {
    Swal.fire({
      title: "Please Enter Value",
      icon: "error",
      confirmButtonText: "Ok",
    });
  }
});
