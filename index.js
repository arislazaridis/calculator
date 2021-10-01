console.log("Start Js");

let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button")); //create an array with buttons
console.log(buttons);

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerHTML = "";
        break;
      case "←":
        if (display.innerText) {
          display.innerHTML = display.innerHTML.slice(0, -1);
        }
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "error";
        }

        break;

      default:
        display.innerText += e.target.innerText;
    }
  });
});
