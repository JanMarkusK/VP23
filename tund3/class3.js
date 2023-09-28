
const firstName = "Jan";
const lastName = "Markus";
const dateTimeValue = require("./dateTimeET")
const fs = require("fs");
let folkWisdom ="";

fs.readFile("Text Files/vanasõnad.txt", "utf8", (err, data)=>{
    if (err) {
        console.log(err);
    }
    else {
        //console.log(data);
        //folkWisdom = data
        onScreen(data);
    }
}); //readFile lõppeb
const onScreen = function(folkWisdom) {
    console.log("Programmi autor on: " + firstName + " " + lastName );
    console.log("Täna on: " + dateTimeValue.dateETformatted());
    console.log("Kell on: " + dateTimeValue.timeETformatted());
    console.log("Praegu on " + dateTimeValue.timeOfDayET()+".");

    //console.log(folkWisdom);
    let folkWisdomS = folkWisdom.split(";");
    console.log(folkWisdomS);
    //console.log(folkWisdomS.length);
    //console.log("Tänane tarkus: " + folkWisdomS [Math.floor(Math.random() * folkWisdomS.length)]); //see valem leiab listist suvalise vanasõna arvu kaudu

    //kõige tavalisem for(loop)         //++ tähenda et väärtusele liidetakse 1 juurde või i+()
    for(let i = 0; i < folkWisdomS.length; i ++) {
        console.log("Vanasõna nr ", +(i+1), ': "' + folkWisdomS.length (i) + ' "');

    }
    
}


//console.log("Täna on: " + dateTimeValue.dateETformatted());
//console.log("Kell on: " + dateTimeValue.timeETformatted());
//console.log("Praegu on " + dateTimeValue.timeOfDayET()+".");
//console.log(dateTimeValue.monthsET);