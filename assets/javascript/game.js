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
        charAtk: 40,
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
        charCounter: 30,
}];
var chosenStats;
var atkUp;
var defenderStats;
var defeatedArray= [];
 function initializeGame() {
        $(".char-choices").append($("#obiWan"));
        $(".char-choices").append($("#Luke"));
        $(".char-choices").append($("#Sidius"));
        $(".char-choices").append($("#Maul"));
        chosenChar = "";
        otherChar = "";
        defender = "";
        chosenStats = "";
        atkUp ="";
        defenderStats = "";
        defeatedArray= [];
        characterDataArray = [
            obiWan = {
                charHealth: 120,
                charAtk: 30,
                charCounter: 5,
        },
            luke = {
                charHealth: 100,
                charAtk: 40,
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
                charCounter: 30,
        }];
        //for (var j = 0; j < charNameArray.length; j++){
            $("#obiWan").find(".health").text(characterDataArray[0].charHealth);
            $("#Luke").find(".health").text(characterDataArray[1].charHealth);
            $("#Sidius").find(".health").text(characterDataArray[2].charHealth);
            $("#Maul").find(".health").text(characterDataArray[3].charHealth)
        }
   
    $(".char-choices").on("click", "figure", function(){
    chosenChar = this;
    $(".your-char").append(chosenChar);
    for (var i = 0; i < charNameArray.length; i++){
        if ($(chosenChar).attr("id") === charNameArray[i]){
            chosenStats = characterDataArray[i];
            atkUp = chosenStats.charAtk;
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
        $().addClass($("current-defender"));
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
        chosenStats.charHealth -= defenderStats.charCounter;
        $(chosenChar).find(".health").text(chosenStats.charHealth);
        defenderStats.charHealth -= chosenStats.charAtk;
        $(defender).find(".health").text(defenderStats.charHealth);
        chosenStats.charAtk += atkUp;
        console.log(chosenStats.charAtk);
        if (defenderStats.charHealth <= 0){
            // append defender data to array to measure length - 1 for win scenario
            defeatedArray.push(defender);
            // send defender to hiden div to be kept for initialization
            $(".defeated").append(defender);
            defender = "";
            if (defeatedArray.length === charNameArray.length - 1){
                initializeGame();
            }
        }
        if (chosenStats.charHealth <= 0){
            initializeGame();
        }
       
    }
});