const operations = document.querySelectorAll(".operations,.number");
const result = document.querySelector(".result");
const history = document.querySelector(".history");
// console.log(result);

const map = new Map();
map.set("+", "+");
map.set("-", "-");
map.set("*", "*");
map.set("/", "/");
map.set("%", "%");


operations.forEach((item) => {
  item.addEventListener("click", (e) => {
    // console.log("length " + result.innerHTML.length);
    result.style.color = "white";

    if (e.target.id === "c") {
      result.innerHTML = "";
      history.innerHTML = "";
      localStorage.clear();
    }

    if (e.target.id === "M") {
      result.innerHTML = result.innerText.slice(0, result.innerText.length - 1);
      history.innerHTML = "";
      localStorage.setItem("resultInnerText", result.innerHTML);
    }

    if (result.innerText.length < 15 && e.target.className === "number") {
      result.innerHTML += e.target.id;
      localStorage.setItem("resultInnerText", result.innerHTML);

    }
    
    if (e.target.className === "operations") {
      //check if user has already entered the operation
      console.log(result.innerText + "  " + result.innerText.length + "before " + result.innerText.slice(-1))
      if (result.innerText.length > 13 || result.innerText.length < 15 && map.has(result.innerText.slice(-1))) {
        console.log("stop")
        e.preventDefault();
        e.stopImmediatePropagation();
      }
      else if (e.target.id === "c" || e.target.id === "M" || e.target.id === "=") {
        //if operations are other than arithmetic operations, don't add to localStorage
      }
      else {
        //if first character is arithmetic operator then don't add to localStorage
        if (result.innerText.length) {
          console.log("unexpected")
          result.innerHTML += e.target.id;
          localStorage.setItem("resultInnerText", result.innerHTML);

        }
      }
    }


    if (e.target.id === "=") {
      if (result.innerHTML === "" || map.has(result.innerText.slice(-1))) {
        e.preventDefault();
      }
      else {
        history.innerHTML = result.innerHTML;
        localStorage.setItem("history", history.innerHTML);
        result.style.color = "#df1c1c";
        result.innerHTML = eval(result.innerHTML);
        localStorage.setItem("resultInnerText", result.innerHTML);

      }
    }

    // let resultInnerText = result.innerText;
    // console.log(resultInnerText.slice(-1));
    // console.log(e)
  });
});
