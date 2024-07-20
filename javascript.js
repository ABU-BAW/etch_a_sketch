const container = document.querySelector("#container");

for (let i = 0; i < 257; i++){

    const div = document.createElement("div");
    div.classList.add("box");
    div.textContent = `div${i + 0}`;
    container.appendChild(div);
   
}

