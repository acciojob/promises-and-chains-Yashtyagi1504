let form = document.querySelector("form");
let age = document.querySelector("#age");
let name = document.querySelector("#name");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let userName = name.value.trim();
  let userAge = parseInt(age.value, 10);

  if (userName === "" || isNaN(userAge)) {
    alert("Please enter valid details");
    return;
  }

  try {
    let message = await new Promise((resolve, reject) => {
      if (userAge > 18) {
        resolve(`Welcome, ${userName}. You can vote.`);
      } else {
        reject(`Oh sorry ${userName}. You aren't old enough.`);
      }
    });

    setTimeout(() => {
      alert(message);
    }, 4000);
  } catch (error) {
    // Handle the error before using setTimeout
    setTimeout(() => {
      alert(error);
    }, 4000);
  }
});
