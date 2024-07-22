document.addEventListener(`DOMContentLoaded`, () => {

const container = document.querySelector("#container");

const squares = document.querySelector('.numOfSquares');
squares.addEventListener(`click`,numOfSquares);



function numOfSquares(){

    const n = prompt(`Please enter the number of squares you need for a side\nPlease note that the maximum you can have is 50`);
    let area;
    if(n > 50){
        console.log(`error, make sure number is less than 50`);
        return;
    }
    else{
        area = n * n;
    }

    container.innerHTML = '';
    
    //creating the grid boxes
    
    for (let i = 0; i < area; i++){

        const div = document.createElement("div");
        div.classList.add("box");
        div.classList.add("grid-item");
        
        container.appendChild(div);
    }

}

container.addEventListener(`mouseover`, (e) => {
    if(e.target.classList.contains(`grid-item`)){
        e.target.style.background = `black`;
    }else{
        e.target.style.background = `white`;
    }
})


})





