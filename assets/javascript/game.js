var chosenChar;
var otherChar;
var defender;
var atkVal = 0;
var charOneAtk = 10;
var charTwoAtk = 20;
var charThreeAtk= 30;
var charFourAtk= 40;






$(".char-choices").on("click", "figure", function(){
    chosenChar = this;
    $(".your-char").append(chosenChar);
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