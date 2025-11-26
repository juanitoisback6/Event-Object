const lista= document.getElementById("lista");




lista.addEventListener("click",(e)=>{
           if (e.target.tagName !== "LI") return;

console.log(e.target.innerText);

if (e.target.style.border==="2px solid white"){

e.target.style.border="2px solid black"; 

}
else{
      e.target.style.border="2px solid white";    
}


})