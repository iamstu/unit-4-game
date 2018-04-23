var chosenChar;
var otherChar;
var defender;
var atkVal = 0;
var charOneAtk = 10;
var charTwoAtk = 20;
var charThreeAtk= 30;
var charFourAtk= 40;
var charHealth;
var defenderHealth;
var obiWan = {
    charHealth: 120,
    charAtk: 30,
    charCounter: 5,
}
var luke = {
    charHealth: 100,
    charAtk: 20,
    charCounter: 10,
}
var obiWan = {
    charHealth: 150,
    charAtk: 10,
    charCounter: 20,
}
var obiWan = {
    charHealth: 180,
    charAtk: 5,
    charCounter: 25,
}
$(".char-choices").on("click", "figure", function(){
    chosenChar = this;
    $(".your-char").append(chosenChar);
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
        console.log("it works yo")
    }
});