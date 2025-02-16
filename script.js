let form = document.querySelector("form");
let age = document.querySelector("#age");
let name = document.querySelector("#name");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let userName = name.value.trim();
  let userAge = parseInt(age.value, 10);

  if (userName === "" || isNaN(userAge)) {
    alert("Please enter valid details");
    return;
  }

  let promise = new Promise((resolve, reject) => {
    if (userAge > 18) {
      resolve(`Welcome, ${userName}. You can vote.`);
    } else {
      reject(`Oh sorry ${userName}. You aren't old enough.`);
    }
  });

  promise
    .then((message) => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(message), 4000);
      });
    })
    .then((delayedMessage) => {
      alert(delayedMessage);
    })
    .catch((error) => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(error), 4000);
      });
    })
    .then((delayedError) => {
      alert(delayedError);
    });
});
