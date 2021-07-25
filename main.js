const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C",
"D","E","F"];
const color=document.querySelector(".color");

function changetext(){
var hexcolor="#";
var ran=getRandom();


for(var i=0; i<6; i++){
	hexcolor += hex[getRandom()];
}
document.getElementById("about-text").style.color=hexcolor;
color.textContent= hexcolor;

}
function getRandom(){
	return Math.ceil(Math.random()*hex.length-1);
}


const str=["Third year CSE student","junior developer","tech enthusiastic"];

const btn = document.getElementById("welcome-btn1");

const wlcomeBtn = document.querySelector('#welcome');

let idx = 0

const diplayMsg = () => {
    btn.innerHTML = str[idx]
}


const changeIdx = () =>{
    idx++   
        if(idx > str.length - 1 ) {
        idx = 0
    }
}

wlcomeBtn.addEventListener('click', () => {
    changeIdx()
    diplayMsg()
    document.getElementById("date-btn").innerHTML ="  "+ Date();
})
