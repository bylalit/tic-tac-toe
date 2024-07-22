let boxes = document.querySelectorAll(".box");
let para = document.querySelector("#winner");
let newBtn = document.querySelector("#new-btn");
let setBtn = document.querySelector("#reset-btn");
let displayShow = document.querySelector(".hide");

let textO = true;

let winPattens = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];


const resetBtn = () =>{
    enableBoxes();
    displayShow.classList.add("hide");
};

const disableBoxes = () =>{
    for(box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (winner) => {
    para.innerText = `Winner is ${winner}`;
    disableBoxes();
    displayShow.classList.remove("hide");
}


const checkWinner = () => {
    for(patten of winPattens){
        // console.log(boxes[patten[0]]);
        // console.log(boxes[patten[1]]);
        // console.log(boxes[patten[2]]);

        let posit1 = boxes[patten[0]].innerText;
        let posit2 = boxes[patten[1]].innerText;
        let posit3 = boxes[patten[2]].innerText;

        if (posit1 != "" && posit2 != "" && posit3 != ""){
            if (posit1 == posit2 && posit2 == posit3){
                console.log("Hello");
                showWinner(posit1);
            }
        } 
    };
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(textO){
            box.innerText = "O";
            box.style.color = "green";
            textO = false;
        }else{
            box.innerText = "X";
            box.style.color = "red";
            textO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

newBtn.addEventListener("click", resetBtn);
setBtn.addEventListener("click", resetBtn);