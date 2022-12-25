//alert("VA MAPLA EPPITI IRUKA");
//prompt("un name enna na maranthuten")
alert("YOU : X opposite :O")
const boxs=document.querySelectorAll('.box');
const gamess=document.querySelector('.game');
const bnrestart=document.querySelector('#reset');

let x="<img src='image/imgonline-com-ua-resize-buoVrRcYwHYZbJ90.jpg'>"
let o="<img src='image/imgonline-com-ua-resize-HHYpO1assYG1.jpg'>";//image/download .jpeg

const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
let option=["","","","","","","","",""];
let currentplayer=x;
let player="X";
let running=false;
init()
function init(){
    boxs.forEach(box=>box.addEventListener('click',boxClick));
    bnrestart.addEventListener('click',restartGame);
    gamess.textContent= `${player} Your Turn`;
    running=true;

}
function boxClick(){
    const index =this.dataset.index;
    if(option[index]!=""|| !running){
        return;
    }
    //console.log(index);
    Updatebox(this,index);
    checkwinner();

}
function Updatebox(box,index){
    option[index]=player;
    box.innerHTML=currentplayer;


}
function checkwinner(){
    let isWon=false;
    for(let i=0;i<win.length;i++){
        const condition=win[i];
        const box1=option[condition[0]];
        const box2=option[condition[1]];
        const box3=option[condition[2]];
        if(box1==""||box2==""||box3==""){
            continue;
        }
        if(box1==box2 && box2==box3){
            isWon=true;
        }
    }
    if(isWon){
        gamess.textContent=`${player} Won...`;
        running=false;
         gamess.classList.add("anime");


    }
    else if(!option.includes("")){
        gamess.textContent="Game Draw...!";
        running=false;
    }
    else{
        changeplayer()
    }


}
function restartGame(){
     option=["","","","","","","","","",];
     currentplayer=x;
     player="X";
    running=true;
    gamess,textContent=`${player} Your turn`;
    boxs.forEach(box=>{
        box.innerHTML="";
        box.classList.remove('win');
    });
    gamess.classList.remove("anime");

}
function changeplayer(){
    player=(player=='X') ? "O":'X';
    currentplayer=(currentplayer==x) ? o:x;
    gamess.textContent= `${player} Your Turn`;
    

}
