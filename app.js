// first access the boxes
let boxes = document.querySelectorAll(".box");
// then reset button
let resetbtn = document.querySelector("#reset");
// new game button
let newgamebtn = document.querySelector("#new-game");
let msgcontainer = document.querySelector(".msg-con");
let msg = document.querySelector("#msg");
let gameDraw = document.querySelector(".gameDraw");



let turn0;
let count = 0;

// user input
const user = () => {
    let userInput = prompt ("Select one of them (X or 0)");
if (userInput === "0"){
    turn0 = true;
    
}
else {
    turn0 = false;
    
}
}
// user ();

// 2D array for wining patterns
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// reset button function
const resetGame = () => {
    turn0 = true;
    enableboxes ();
    // to hide the msg container
    msgcontainer.classList.add("hide");
    gameDraw.classList.add("hide");
    
    
    // user ();
}
// reset the game
resetbtn.addEventListener("click", resetGame);
// to triger the new game button 
newgamebtn.addEventListener("click", resetGame);

const enableboxes = () => {
    for (let box of boxes) {

        //  to enable all boxes
        box.disabled = false;
        // to empty all the boxes
        box.innerText = "";
        box.style.background = "#ffffc7";
    }
};

// disabling the boxes after winner
const disableboxes = () => {
    for (let box of boxes) {

        // disable all the boxes
        box.disabled = true;
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log ("box clicked" + count);
        count++;
        
        if (turn0 === true) {
            box.innerText = "0";
            box.style.background = "#eeee6a";
            // takey dubara 0 ki bari na aey
            turn0 = false;
            
            
        }
        else {
            box.innerText = "X";
            box.style.background = "#5fd697";
            turn0 = true;
        }
        // disabling the button so it wont be clicked next time
        box.disabled = true;//
        checkWinner ();
        if (count === 9) {
            console.log("no winner");
            gameDraw.classList.remove("hide");
            count = 0;


        }
        
        

    });
});


// check winner
const checkWinner = () => {
    for ( let pattern of winPatterns) {
        // console.log (pattern);
        // taking indexis of array
        // console.log (pattern[0], pattern[1], pattern[2]);

        // boxes waley array main is index per jao
        // boxes walery array main ye waley indexis check hongey
        // console.log (boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);

        // this is basically position 1 2 3
        let post1val = boxes[pattern[0]].innerText;
        let post2val = boxes[pattern[1]].innerText;
        let post3val = boxes[pattern[2]].innerText;

        if 
        (post1val != "" && post2val != "" && post3val != ""){
            if 
            (post1val === post2val && post2val === post3val){
                

                showwinner (post1val);
            }
            
            

        }
        
    }
   
};

const showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes ();
}
// const noWinner = () => {
//     gameDraw.innerText = "Game draw, No one wins the game";
//     gameDraw.classList.remove("hide");
//     disableboxes();
// }




