const regex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

const btn = document.getElementById("btn");
const error = document.querySelectorAll(".error");
const input = document.querySelectorAll(".input");
const validEmail = document.querySelector(".valid-email");

console.log(input);
console.log(validEmail);

btn.addEventListener("click", function (e) {
  e.preventDefault();

  input.forEach(function (element, index) {
    error[index].style.display = "none";

    if (element.value == "") {
      error[index].style.display = "block";
    }

    if (element.id == "email") {
      if (!element.value.match(regex)) {
        validEmail.style.display = "block";
      } else {
        validEmail.style.display = "none";
      }
    }
  });
});
