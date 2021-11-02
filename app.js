// // console.log("hi its me")
// var username = prompt("give me usename")
// alert("this is the usrname "+ username)
//
var btnTranslate = document.querySelector("#btn-translate");  
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output");

////console.log(txtInput)
// reference to the button
// console.log(btnTranslate);
function clickHandler(){
   outputDiv.innerText = "aknfnanavn  "+ txtInput.value;
};
btnTranslate.addEventListener("click", clickHandler);