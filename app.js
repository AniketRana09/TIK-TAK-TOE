let boxes=document.querySelectorAll('.box');
let resetbtn=document.querySelector('#reset');
let newgmaebtn=document.querySelector('#new');
let msgcontainer=document.querySelector('.msgcontainer');
let msgg=document.querySelector('#msg');
let count=0;

let turn0=true;//playerx,player0

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];

const resetgame=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add('hide');
    count=0;
 }
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log(`Box was Clicked!`);
        count++;
        console.log(count);
        if( count==9){
            checkdraw();
        }

        if (turn0===true){
        box.style.color="#7FE54C";
        box.innerText='O';
        turn0=false;
        
        }
        else{
            box.style.color="#F05D5E"
            box.innerText='X'; 
            turn0=true;
        }
         box.disabled=true;              // box.style.pointerEvents="none"  
        checkwinner();
        
    })
})

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(winner)=>{
    msgg.innerText=`Congratulations ,Winner is : ${winner}`;
    msgcontainer.classList.remove('hide');
    disableboxes();
}

//draw condition
const checkdraw=()=>{
        msgg.innerText=`Match is DRAW`;
        msgcontainer.classList.remove('hide');
    }


const checkwinner=()=>{
    for (let pattern of winpattern) {
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;

        if(posval1!=""&&posval2!=""&&posval3!=""){
            if(posval1===posval2&&posval2===posval3){
                console.log(`winner${posval1}`);
                showwinner(posval1);
                return;
            }
        
        }

        
    }
    

}

resetbtn.addEventListener('click',()=>{
    resetgame();
});
newgmaebtn.addEventListener('click',resetgame)
