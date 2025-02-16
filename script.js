let form = document.querySelector("form");
let age = document.querySelector("#age");
let name = document.querySelector("#name");
form.addEventListener("submit", (e) => {
	e.preventDefault();
  if (age.value == "" || name.value == "") {
    alert("Please enter valid details");
  } else {
    let promise = new Promise((resolve, reject) => {
      if (parseInt(age.value) > 18) {
        resolve(`Welcome, ${name.value}. You can vote.`);
      } else {
		  setTimeout(()=>{
			  reject(`Oh sorry ${name.value}. You aren't old enough.`);
		  },4000)
      }
    });
    promise.then((data) => {
      setTimeout(() => {
        alert(data);
      }, 4000);
    });
    promise.catch((err) => {
		alert(err)
    });
  }
});
