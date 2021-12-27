import("./index.css")

import Icon from "./Icon.png";

let noteShow=document.getElementById("note");

let mainparent=document.getElementById("show");

let btn = document.getElementById("sbmt");
btn.addEventListener("click",Add);



function Add(){

    let parent=document.createElement("div");
    parent.setAttribute("class","parent");    

    let div=document.createElement("div");
    div.setAttribute("class","divNote");
    div.textContent=noteShow.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="Mark Done";
    delBtn.setAttribute("class","delBtn");

    delBtn.onclick=function(){
        mainparent.removeChild(parent);
    }

    parent.append(div,delBtn);
    mainparent.append(parent);

    noteShow.value=null;
}

let logo=document.getElementById("logo");

let img=document.createElement("img");
img.setAttribute("class","logoOff");
img.src=Icon;

logo.append(img);