const p1 = document.querySelector("#p1");
const btnChange = document.getElementById("change");
let counter = 0;

btnChange.addEventListener("click", function (e) {
    e.preventDefault();
    counter++;
    p1.innerText = "Licznik: " + counter;
});