var alleBegriffe = [];
var begriffLinks;
var begriffRechts;



window.onload = function(){
    sortiereListe();
    neueOptionen();

    console.log("alleBegriffe: " + storageProxy.alleBegriffe); //test
}


const storageProxy = new Proxy({}, {
    get(_, key){
        return JSON.parse(localStorage.getItem(key));
    },
    set(_, key, value){
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    }
})

alleBegriffe = storageProxy.alleBegriffe;


// Testobjekte hinzufügen (nur wenn `alleBegriffe` leer ist)
if (alleBegriffe.length === 0) {
    for (let i = 0; i < 4; i++) {
        alleBegriffe.push({ name: i, punkte: 0 });
    }
    storageProxy.alleBegriffe = alleBegriffe; // Speichern

    sortiereListe();
    neueOptionen();
}



//function shuffle
function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]];
    }
}



function randomNumber(amount, sourceArray) {
    if (!randomNumber.usedIndices) {
        randomNumber.usedIndices = new Set();
    }

    if (sourceArray.length < amount + randomNumber.usedIndices.size) {
        throw new Error("Nicht genug eindeutige Indizes im Array.");
    }

    const indices = new Set();

    while (indices.size < amount) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * sourceArray.length);
        } while (randomNumber.usedIndices.has(randomIndex)); // Prüft, ob der Index schon vorher genutzt wurde

        indices.add(randomIndex);
    }

    // Speichere die neuen Indizes für den nächsten Durchlauf
    randomNumber.usedIndices = new Set(indices);

    return Array.from(indices);
}








function leereListe(ulElement) {
    while (ulElement.firstChild) {
        ulElement.removeChild(ulElement.firstChild);
    }
}

function sortiereListe() {
    alleBegriffe.sort((a, b) => b.punkte - a.punkte); // Sortiert absteigend nach Punkten
    storageProxy.alleBegriffe = alleBegriffe; //alleBegriffe speichern

    const ul = document.getElementById("_UlAlleBegriffe");
    leereListe(ul); // Sicheres Entfernen aller Elemente

    alleBegriffe.forEach(begriff => {
        const li = document.createElement("li");
        li.textContent = `${begriff.name} (${begriff.punkte})`;
        ul.appendChild(li);
    });
}







//zufällige elemente auswählen und in die buttons geben
function neueOptionen(){
    if (alleBegriffe.length < 2) return;
    zweiRandomZahlen = randomNumber(2, alleBegriffe);

    begriffLinks = alleBegriffe[zweiRandomZahlen[0]];
    document.getElementById("_buttonAuswahlLinks").textContent = begriffLinks.name;

    begriffRechts = alleBegriffe[zweiRandomZahlen[1]];
    document.getElementById("_buttonAuswahlRechts").textContent = begriffRechts.name;
}







//neuen input verwerten
document.getElementById("_inputNeuerBegriff").addEventListener("keydown", (event) => {
    let input = document.getElementById("_inputNeuerBegriff").value;

    if (event.key === 'Enter'){
        if(input){
            alleBegriffe.push({ name: input, punkte: 0 });
            }
            storageProxy.alleBegriffe = alleBegriffe; //alleBegriffe speichern


            console.log("alleBegriffe: " + alleBegriffe); //test


            //zur liste
            var li = document.createElement("li");
            var txt = document.createTextNode(input);
            li.appendChild(txt);
        
            document.getElementById("_UlAlleBegriffe").appendChild(li);
            

            document.getElementById("_inputNeuerBegriff").value = "";
            neueOptionen();
            sortiereListe();
        }
})







//buttons aktualisieren nach drücken
document.getElementById("_buttonAuswahlLinks").addEventListener("click", (event) => {
    begriffLinks.punkte++;
    storageProxy.alleBegriffe = alleBegriffe;
    

    console.log(begriffLinks.name + " + " + begriffLinks.punkte);

    sortiereListe();
    neueOptionen();
})

document.getElementById("_buttonAuswahlRechts").addEventListener("click", (event) => {
    begriffRechts.punkte++;
    storageProxy.alleBegriffe = alleBegriffe;


    console.log(begriffRechts.name + " + " + begriffRechts.punkte);

    sortiereListe();
    neueOptionen();
})

document.getElementById("_buttonNeueAuswahl").addEventListener("click", (event) => {
    neueOptionen();
})











// console.log("alleBegriffe: " + alleBegriffe[0].name); //test







// //alle elemente aufschreiben
// window.addEventListener("keydown", (event) => {
//     if (event.key === "p"){
//         for(let i = 0; i < alleBegriffe.length; i++){
//             var txt = document.createTextNode(alleBegriffe[i].name);
//             document.getElementById("test1").appendChild(txt);
//         }


//     }
// })

// alleBegriffe.find({name: input}).punkte



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