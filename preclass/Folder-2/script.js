var caption = document.getElementById("caption");
var button_männlich = document.getElementById("button_männlich");
var button_frau = document.getElementById("button_frau");
var even_rows = document.getElementsByClassName("even_rows");
var odd_rows = document.getElementsByClassName("odd_rows");
var buch = document.getElementsByClassName("buch");
var sport = document.getElementsByClassName("sport");


button_männlich.onclick = function() {
    caption.style.backgroundColor = "cornflowerblue";
    odd_rows[0].style.backgroundColor = "cornflowerblue";
    odd_rows[1].style.backgroundColor = "cornflowerblue";
    odd_rows[2].style.backgroundColor = "cornflowerblue";
    even_rows[0].style.backgroundColor = "white";
    even_rows[1].style.backgroundColor = "white";
    button_männlich.style.visibility = "hidden";
    button_frau.style.visibility = "visible";
    button_frau.innerHTML = "Change to Frau";
    button_männlich.style.color ="darkblue"
    ///////////////////////////////
    buch[0].innerHTML = "Buch";
    buch[1].innerHTML = "Buch";
    buch[2].innerHTML = "Buch";
    buch[3].innerHTML = "Buch";
    buch[4].innerHTML = "Buch";
    ///////////////////////////////////
    buch[0].style.color = "darkblue";
    buch[1].style.color = "darkblue";
    buch[2].style.color = "darkblue";
    buch[3].style.color = "darkblue";
    buch[4].style.color = "darkblue";
    ///////////////////////////
    sport[0].innerHTML = "";
    sport[1].innerHTML = "";
    sport[2].innerHTML = "";
    sport[3].innerHTML = "";
    sport[4].innerHTML = "";
    
}

button_frau.onclick = function() {
    even_rows[0].style.backgroundColor = "pink";
    even_rows[1].style.backgroundColor = "pink";
    odd_rows[0].style.backgroundColor = "white";
    odd_rows[1].style.backgroundColor = "white";
    odd_rows[2].style.backgroundColor = "white";
    ////////////////////////////
    caption.style.backgroundColor ="pink"
    button_männlich.style.visibility = "visible";
    button_frau.style.visibility = "hidden";
    ////////////////////////
    button_männlich.innerHTML = "Change to Männlich";
    //////////////////////////////////
    sport[0].innerHTML ="Sport";
    sport[1].innerHTML ="Sport";
    sport[2].innerHTML ="Sport";
    sport[3].innerHTML ="Sport";
    sport[4].innerHTML ="Sport";
    ////////////////////////////
    sport[0].style.color = "chartreuse";
    sport[1].style.color = "chartreuse";
    sport[2].style.color = "chartreuse";
    sport[3].style.color = "chartreuse";
    sport[4].style.color = "chartreuse";
    //////////////////////////////////
    buch[0].innerHTML = "";
    buch[1].innerHTML = "";
    buch[2].innerHTML = "";
    buch[3].innerHTML = "";
    buch[4].innerHTML = "";

}
    
