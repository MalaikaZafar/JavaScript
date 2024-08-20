const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const target = e.target.id;
    switch (target) {
      case "cadetBlue":
        body.style.backgroundColor = target; //We can use 'target' and even 'e.target.id'; both will work fine
        break;
      case "lightCyan":
        body.style.backgroundColor = e.target.id;
        break;
      case "lavender":
        body.style.backgroundColor = e.target.id;
        break;
      case "lightCoral":
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});
