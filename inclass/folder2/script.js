
// var caption = document.getElementById("caption");
// var button_girls = document.getElementById("button-girls");
// var button_boys = document.getElementById("button-boys");
// var even_rows = document.getElementsByClassName("even_rows");
// var odd_rows = document.getElementsByClassName("odd_rows");
// var book = document.getElementsByClassName("book");
// var sport = document.getElementsByClassName("sport");
// var button_1 = document.getElementById("button_1");
// var button_2 = document.getElementById("button_2");
// var button_3 = document.getElementById("button_3");
// var button_4 = document.getElementById("button_4");
// var button_5 = document.getElementById("button_5");
// var button_6 = document.getElementById("button_6");

// 1: id ile her birini tek tek yakalamak 
// 2: class kullanmak ama dikkat [0]  [1]   önemli 


// #######################################  ikinci secenek

var buttons = document.getElementsByClassName("button");

    // buttons[0].onclick = function(){
    //     // alert("Butonu pembe yapmak istediginizden emin misiniz?");
    //     if (confirm("Butonu pembe yapmak istediginizden emin misiniz?")) {
    //         buttons[2].style.backgroundColor = "pink";
    //       } else {
    //         buttons[2].style.backgroundColor = "red";
    //         buttons[2].innerHTML = "oooo";
    //       }
    // }

    buttons[0].onclick = function(){
        confirm("Emin misiniz?");
        buttons[0].style.backgroundColor = "red";
    }

    buttons[5].onclick = function(){
        if (confirm("Emin misiniz?")) {
            buttons[5].style.backgroundColor = "blue";
        } else {
            buttons[5].style.backgroundColor = "red";
        } 
    }





// confirmation
// button_boys.onclick = function() {
//     caption.style.backgroundColor = "cornflowerblue";
//     odd_rows[0].style.backgroundColor = "cornflowerblue";
//     odd_rows[1].style.backgroundColor = "cornflowerblue";
//     odd_rows[2].style.backgroundColor = "cornflowerblue";
//     even_rows[0].style.backgroundColor = "white";
//     even_rows[1].style.backgroundColor = "white";
//     ////////////////////////////////
//     button_boys.style.visibility = "hidden";
//     button_girls.style.visibility = "visible";
//     //////////////////////////////////
//     button_girls.innerHTML = "Change to Girls"
//     //////////////////////////////////
//     book[0].innerHTML = "Book";
//     book[1].innerHTML = "Book";
//     book[2].innerHTML = "Book";
//     book[3].innerHTML = "Book";
//     book[4].innerHTML = "Book";
//     /////////////////////////////////////
//     book[0].style.color = "darkblue";
//     book[1].style.color = "darkblue";
//     book[2].style.color = "darkblue";
//     book[3].style.color = "darkblue";
//     book[4].style.color = "darkblue";
//     /////////////////////////////////7
//     sport[0].innerHTML = "";
//     sport[1].innerHTML = "";
//     sport[2].innerHTML = "";
//     sport[3].innerHTML = "";
//     sport[4].innerHTML = "";

// }

// button_girls.onclick = function() {
//     caption.style.backgroundColor = "pink";
//     even_rows[0].style.backgroundColor = "pink";
//     even_rows[1].style.backgroundColor = "pink";
//     odd_rows[0].style.backgroundColor = "white";
//     odd_rows[1].style.backgroundColor = "white";
//     odd_rows[2].style.backgroundColor = "white";
//     /////////////////////////////////////////
//     button_girls.style.visibility = "hidden";
//     button_boys.style.visibility = "visible";
//     ////////////////////////////////////////
//     button_boys.innerHTML = "Change to Boys";
//     /////////////////////////////////////
//     sport[0].innerHTML = "Sport";
//     sport[1].innerHTML = "Sport";
//     sport[2].innerHTML = "Sport";
//     sport[3].innerHTML = "Sport";
//     sport[4].innerHTML = "Sport";
//     ///////////////////////////////////
//     sport[0].style.color = "darkmagenta";
//     sport[1].style.color = "darkmagenta";
//     sport[2].style.color = "darkmagenta";
//     sport[3].style.color = "darkmagenta";
//     sport[4].style.color = "darkmagenta";
//     ///////////////////////////////
//     book[0].innerHTML = "";
//     book[1].innerHTML = "";
//     book[2].innerHTML = "";
//     book[3].innerHTML = "";
//     book[4].innerHTML = "";
// }

//     button_1.onclick = function() {
//     alert("sedatin dikkatine";
//     button_1.style.backgroundColor = "pink";  
// }
//     button_2.onclick = function() {
//     alert("sedatin dikkatine");
//     button_2.style.backgroundColor = "red";  
// }
//     button_3.onclick = function() {
//     alert("sedatin dikkatine");
//     button_3.style.backgroundColor = "pink";  
// }
//     button_4.onclick = function() {
//     alert("sedatin dikkatine");
//     button_4.style.backgroundColor = "pink";  
// }
//     button_5.onclick = function() {
//     alert("sedatin dikkatine");
//     button_5.style.backgroundColor = "pink";  
// }
//     button_6.onclick = function() {
//     alert("sedatin dikkatine");
//     button_6.style.backgroundColor = "pink";  
// }




