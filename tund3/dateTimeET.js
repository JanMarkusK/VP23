const monthNamesET =["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
//kuupäeva leidmine
const dateETformatted = function(){
    console.log (monthNamesET [1]);
    let timeNow = new Date();
    return timeNow.getDate() + "." + monthNamesET[timeNow.getMonth()] + "." + timeNow.getFullYear();
}
//aja leidmine
const timeETformatted = function (){
    let timeNow = new Date();
    return timeNow.getHours() + ":" + timeNow.getMinutes() + ":" + timeNow.getSeconds();
}
const timeOfDayET = function(){
    let partOfDay = "suvaline hetk";
    let hourNow = new Date().getHours();
    if (hourNow >= 6 && hourNow < 12){
        partOfDay = "hommik";
    }
    if (hourNow >= 14 && hourNow < 18){
        partOfDay = "pärastlõuna";
    }
    if (hourNow >= 18){
        partOfDay = "õhtu";
    }
    return partOfDay;

}

//ekspordin kõik asjad
module.exports = {dateETformatted: dateETformatted, timeETformatted: timeETformatted, monthsET: monthNamesET, timeOfDayET: timeOfDayET};
console.log(monthNamesET)