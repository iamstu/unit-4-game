var chosenChar;
var otherChar;
var defender;
//array to find the location of character data by id of html element
var charNameArray = ["obiWan", "Luke", "Sidius", "Maul"];
//array to acces data and use with correct character
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
//var to make atk increase static
var atkUp;
var defenderStats;
//array to determin if win scenario is met
var defeatedArray= [];
//our reset function
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
   //sets the clicked figure to the chosen character var and moves it to the correct section
    $(".char-choices").on("click", "figure", function(){
    chosenChar = this;
    $(".your-char").append(chosenChar);
    //a loop to find the data for the clicked char by the id of the character and setting the atk increase
    for (var i = 0; i < charNameArray.length; i++){
        if ($(chosenChar).attr("id") === charNameArray[i]){
            chosenStats = characterDataArray[i];
            atkUp = chosenStats.charAtk;
            console.log(chosenStats);
        }
    }
    //moves the other imgs to the appropriate div after eveything else is done
    otherChar = $(".char-choices .char");
    attackers()
});

function attackers(){
    $(".defenders-left").append(otherChar);
}

$(".defenders-left").on("click", "figure", function(){
    //make sure the defender area is empty and then allow player to chose defender
    if (!defender){ 
        defender = this;
        $().addClass($("current-defender"));
    $(".defender").append(defender);
    //same loop for player character but for defender
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
//prevent idle atk from breaking my hard work
    if (!defender){
        return false;
    }
    //decrease health of each and print that to screen
    else {
        chosenStats.charHealth -= defenderStats.charCounter;
        $(chosenChar).find(".health").text(chosenStats.charHealth);
        defenderStats.charHealth -= chosenStats.charAtk;
        $(defender).find(".health").text(defenderStats.charHealth);
        //after atk is done increase player atk
        chosenStats.charAtk += atkUp;
        console.log(chosenStats.charAtk);
        //check to see if defender is alive
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
        //make sure player is alive (it is assumed player atks first so player health is measured last)
        if (chosenStats.charHealth <= 0){
            initializeGame();
        }
       
    }
});