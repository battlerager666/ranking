const alleBegriffe = [];



document.getElementById("_inputNeuerBegriff").addEventListener("keydown", (event) => {
    let input = document.getElementById("_inputNeuerBegriff").value;

    console.log(input);

    if (event.key === 'Enter'){
        if(input != ""){
            alleBegriffe.push({name: input, punkte: 0});
        }

            document.getElementById("_inputNeuerBegriff").value = "";

            for(let i = 0; i < alleBegriffe.length; i++){
                console.log(alleBegriffe[i].name);
            }




            var li = document.createElement("li");
            var txt = document.createTextNode(input);
            li.appendChild(txt);
        
            if(input != ""){
                document.getElementById("_UlAlleBegriffe").appendChild(li);
            }
        }
})









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
