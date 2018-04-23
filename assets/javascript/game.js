var chosenChar;
var otherChar;
var defender;
var charNameArray = ["obiWan", "Luke", "Sidius", "Maul"];
var characterDataArray = [
    obiWan = {
        charHealth: 120,
        charAtk: 30,
        charCounter: 5,
},
    luke = {
        charHealth: 100,
        charAtk: 20,
        charCounter: 10,
},
    sidius = {
        charHealth: 150,
        charAtk: 10,
        charCounter: 20,
},
    maul = {
        charHealth: 180,
        charAtk: 5,
        charCounter: 25,
}];
var chosenStats;
var defenderStats;
$(".char-choices").on("click", "figure", function(){
    
    chosenChar = this;
    $(".your-char").append(chosenChar);
    for (var i = 0; i < charNameArray.length; i++){
        if ($(chosenChar).attr("id") === charNameArray[i]){
            chosenStats = characterDataArray[i];
            console.log(chosenStats);
        }
    }
    parseInt(chosenChar)
    otherChar = $(".char-choices .char");
    attackers()
});

function attackers(){
    $(".defenders-left").append(otherChar);
}

$(".defenders-left").on("click", "figure", function(){
    
    if (!defender){ 
        defender = this;
    $(".defender").append(defender);
    for (var i = 0; i < charNameArray.length; i++){
        if ($(defender).attr("id") === charNameArray[i]){
            defenderStats = characterDataArray[i];
            console.log(defenderStats);
        }
    }
}
    else{
        return false;
    }
});

$(".attack").on("click", function(){

    if (!defender){
        return false;
    }
    else {
        chosenStats.charHealth -= defenderStats.charAtk;
        $(chosenChar).find(".health").text(chosenStats.charHealth);
        defenderStats.charHealth -= chosenStats.charAtk;
        $(defender).find(".health").text(defenderStats.charHealth);
    }
});