const alleBegriffe = [];
var begriffLinks;
var begriffRechts;


//neuen input verwerten
document.getElementById("_inputNeuerBegriff").addEventListener("keydown", (event) => {
    let input = document.getElementById("_inputNeuerBegriff").value;

    if (event.key === 'Enter'){
        if(input != ""){
            alleBegriffe.push({ name: input, punkte: 0 });
            }

            document.getElementById("_inputNeuerBegriff").value = "";

            for(let i = 0; i < alleBegriffe.length; i++){
                console.log(alleBegriffe[i].name);
            }



            //zur liste
            var li = document.createElement("li");
            var txt = document.createTextNode(input);
            li.appendChild(txt);
        
            if(input != ""){
                document.getElementById("_UlAlleBegriffe").appendChild(li);
            }

            neueOptionen();
        }
})






//zufällige elemente auswählen und in die buttons geben
function neueOptionen(){
    shuffle(alleBegriffe);

    console.log(alleBegriffe);

    begriffLinks = alleBegriffe[0];
    document.getElementById("_buttonAuswahlLinks").textContent = begriffLinks.name;

    begriffRechts = alleBegriffe[1];
    document.getElementById("_buttonAuswahlRechts").textContent = begriffRechts.name;
}


//function shuffle
function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]];
    }
}




//testobjekte erstellen
for(let i = 1; i < 5; i++){
    alleBegriffe.push({name: i, punkte: 0});

            var li = document.createElement("li");
            var txt = document.createTextNode(i);
            li.appendChild(txt);
        
            
            document.getElementById("_UlAlleBegriffe").appendChild(li);
}



//buttons aktualisieren nach drücken
document.getElementById("_buttonAuswahlLinks").addEventListener("click", (event) => {
    begriffLinks.punkte++;

    neueOptionen();
})

document.getElementById("_buttonAuswahlRechts").addEventListener("click", (event) => {
    begriffRechts.punkte++;

    neueOptionen();
})

document.getElementById("_buttonNeueAuswahl").addEventListener("click", (event) => {
    neueOptionen();
})




// //alle elemente aufschreiben
// window.addEventListener("keydown", (event) => {
//     if (event.key === "p"){
//         for(let i = 0; i < alleBegriffe.length; i++){
//             var txt = document.createTextNode(alleBegriffe[i].name);
//             document.getElementById("test1").appendChild(txt);
//         }


//     }
// })

alleBegriffe.find({name: input}).punkte



// document.getElementById("_buttonLetzterBegriffWeg").addEventListener("click", function(e){
//     let popped = alleBegriffe.pop();
// })








// var i;

// for(i = 0; i < alleBegriffe.length; i++){
//     var span = document.createElement("span");
//     span.className = "close";
//     var txt = document.createTextNode(alleBegriffe[i]);
//     span.appendChild(txt);

//     document.getElementById("_UlAlleBegriffe").appendChild(span);
// }






// const items = [
//     { name: "Edward", value: 38 },
//     { name: "Sharpe", value: 37 },
//     { name: "And", value: 45 },
//     { name: "The", value: -12 },
//     { name: "Magnetic", value: 13 },
//     { name: "Zeros", value: 35 },
//   ];
  
//   // sort by value
//   items.sort((a, b) => a.value - b.value);

//   console.log(items);