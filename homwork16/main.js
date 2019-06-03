const text = document.getElementById("note");
const area = document.getElementsByClassName("main") [0];
const minichat = document.getElementsByClassName("minichat") [0];
const chat = document.getElementById("chat");
const icon = document.getElementsByClassName ("far fa-paper-plane")[0];
const sil = document.getElementById("sil");


text.addEventListener("keydown", function(e){
if(e.keyCode === 13){
const newdiv = document.createElement("div");
newdiv.classList.add("question")
area.appendChild(newdiv);
const newp = document.createElement("p");
newp.innerHTML = text.value;
newdiv.appendChild(newp);
text.value = "";  
const newimage = document.createElement("img");
newimage.src = "client.jpg" ;
newdiv.appendChild(newimage);
newimage.addEventListener("click", function(){
newdiv.classList.toggle("delete");
sil.classList.toggle("d-none");
})
}});
    
icon.addEventListener("click", function(){
const newdiv = document.createElement("div");
newdiv.classList.add("question")
area.appendChild(newdiv);
const newp = document.createElement("p");
newp.innerHTML = text.value;
newdiv.appendChild(newp);
text.value = "";  
const newimage = document.createElement("img");
newimage.src = "client.jpg" ;
newdiv.appendChild(newimage);
newimage.addEventListener("click", function(){
newdiv.classList.toggle("delete");
sil.classList.toggle("d-none");
})
});

minichat.onclick = function(){
chat.classList.toggle("d-none")
}

sil.onclick = function(){
let list = document.getElementsByName("delete");
list.parentNode.removeChild(list);
}
