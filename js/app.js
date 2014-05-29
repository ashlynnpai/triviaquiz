var set = [
    {question: "Which politician was a Senator of New York?", choices: ["Reagan", "Bush", "Clinton", "Obama"], answer: 2},
    {question: "What is the capital of Bulgaria?", choices: ["Bucharest", "Bulgar", "Kiev", "Sofia"], answer: 3}, 
    {question: "Which of these is a prime number?", choices: ["367", "377", "387", "407"], answer: 0}, 
    {question: "Which team won the first Superbowl?", choices: ["Chiefs", "Packers", "Bears", "Broncos"], answer: 1}, 
    {question: "Who wrote the music for Les Miserables?", choices: ["John Williams", "Lloyd Webber", "Rodgers & Hammerstein", "Boublil & Schonberg"], answer: 3},
]; 

var nextq;
var prevq;
var score = 0;
var rightanswers;
var count = 1;
var totalQ = set.length;
    
$("#score").html(score);
$("#count").html(count);
$("#total").html(totalQ);
    
function cycle(){
nextq = set.shift();  
}

cycle();
nextQuestion();

var select;
$( "#nextbutton" ).click(function() {
select = $( "input:radio[name=answer]:checked" ).val();
    if (select == undefined){
    alert("Please select an answer");
    }
    else {
set.push(nextq);
count++;
choose();
$("#score").html(score);
$("#count").html(count);
clear();
cycle();
nextQuestion();
endQuiz();
    }
   });    

$( "#backbutton" ).click(function() {
    console.log(count);
    if (count > 1) {
        count--;
        $("#count").html(count);
        set.unshift(nextq);
        nextq = set.pop();
        console.log(nextq);
        nextQuestion();
    }      
    lowerscore();   
});
    
function nextQuestion(){
    $("#askQ").html(nextq.question);
    //print to label of radio button
    $("input[value='0']").next().text(nextq.choices[0]);
    $("input[value='1']").next().text(nextq.choices[1]);
    $("input[value='2']").next().text(nextq.choices[2]);
    $("input[value='3']").next().text(nextq.choices[3]);
}

function clear(){
    $("input[value='0']").prop( "checked", false );
    $("input[value='1']").prop( "checked", false );
    $("input[value='2']").prop( "checked", false );
    $("input[value='3']").prop( "checked", false );
}

function endQuiz(){
    if (count > totalQ) { 
    $("#count").html(totalQ);
    $("#askQ").html("Final Score: " + score + " of " + totalQ);
    $("#askQ").css("font-size", "+=20");
    $("input[value='0']").next().text("");
    $("input[value='1']").next().text("");
    $("input[value='2']").next().text("");
    $("input[value='3']").next().text("");
    $(".radios").hide();
    $( ".button" ).hide(); 
    $("#correct").hide("slow");
    };
}
    
function lowerscore() {
    for (i=0; i<rightanswers.length; i++){
        if (rightanswers[i] == nextq){
            score--
         $("#score").html(score);
        }
        }
        }; 

function choose(){
     if (select == nextq.answer) {
        $("#correct").html("Correct");
        $("#correct").css( "color", "green" );
        score++;
        rightanswers = [];  // need to erase the points earned if back button is used
        rightanswers.push(nextq); 
        $("#score").html(score);
    }
    else {$("#correct").html("Incorrect");
        $("#correct").css( "color", "red" );
         };
}