document.addEventListener(`DOMContentLoaded`, () => {

const container = document.querySelector("#container");

for (let i = 0; i < 256; i++){

    const div = document.createElement("div");
    div.classList.add("box");
    div.classList.add("grid-item");

    container.appendChild(div);
}

container.addEventListener(`mouseover`, (e) => {
    if(e.target.classList.contains(`grid-item`)){
        e.target.style.background = `black`;
    }else{
        e.target.style.background = `white`;
    }
})

})





