const input = document.getElementById("input");
const submit = document.getElementById("submit");
const body = document.querySelector("body");
let inputValue = input.value;
function buttonSubmit() {
    let fetchInput = "https://api.agify.io/?name=" + input.value;
    fetch(fetchInput)
        .then((response) => response.json())
        .then((json) => {
            if (input.value == false) {
                console.log("nothing");
            } else {
                let div = document.createElement("div");
                div.innerHTML = `${json.name} is ${json.age} years`;
                body.append(div);
                // body.innerHTML += `<div>${json.age}</div>`;
            }
        })
        .catch((error) => {
            console.log("There is an error", error);
        });
}

submit.addEventListener("click", buttonSubmit);
