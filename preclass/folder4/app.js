var sedat = document.getElementById("div_1")
var sedat2 = document.getElementById("div_2")

sedat.onclick = function() {
    sedat.style.backgroundColor = "red";
    sedat2.style.width = "70%";
    
    
}
sedat2.onclick = function(){
    sedat.style.backgroundColor = "pink";

}
sedat.onmouseenter = function(){
    sedat.style.width = "45%";

}
sedat2.onmouseout = function(){
    sedat2.style.backgroundColor = "brown";
}