let input1 = document.getElementById("in-one");
let input2 = document.getElementById("in-two");
let subbtn = document.getElementById("subbtn");
let sumbtn = document.getElementById("sumbtn");
let output = document.getElementById("output");
let divbtn = document.getElementById("divbtn");
let mulbtn = document.getElementById("mulbtn");
let modbtn = document.getElementById("modbtn");
let clrbtn = document.getElementById("clr-btn");


let total;
/*FUNCTIONS----------------------------------------*/
function sumfunction(input1,input2){
    input1 = Number(input1.value);
    input2 = Number(input2.value);
total = input1 + input2;

}

function subfunction(input1,input2){
    input1 = Number(input1.value);
    input2 = Number(input2.value);
total = input1 - input2;

}

function divfunction(input1,input2){
    input1 = Number(input1.value);
    input2 = Number(input2.value);
total = input1 / input2;

}

function mulfunction(input1,input2){
    input1 = Number(input1.value);
    input2 = Number(input2.value);
total = input1 * input2;

}

function modfunction(input1,input2){
    input1 = Number(input1.value);
    input2 = Number(input2.value);
total = input1 % input2;

}

/*BUTTON OUTPUTS----------------------------*/

sumbtn.onclick = function(){
sumfunction(input1,input2);
document.getElementById("output").textContent = total;
}

subbtn.onclick = function(){
    subfunction(input1,input2);
    document.getElementById("output").textContent = total;
    }
 mulbtn.onclick = function(){
    mulfunction(input1,input2);
    document.getElementById("output").textContent = total;
 }

 divbtn.onclick = function(){
    divfunction(input1,input2);
    document.getElementById("output").textContent = total;
 }

 modbtn.onclick = function(){
    modfunction(input1,input2);
    document.getElementById("output").textContent = total;
 }

 document.getElementById('clr-btn').addEventListener('click', function() {
    document.getElementById('output').innerText = 'OUTPUT';
    document.getElementById('in-one').value = '0';
    document.getElementById('in-two').value = '0';
});



