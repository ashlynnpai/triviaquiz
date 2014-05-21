var set = [
    {question: "Which politician was a Senator of New York?", choices: ["Reagan", "Bush", "Clinton", "Obama"], answer: 2},
    {question: "What is the capital of Bulgaria?", choices: ["Bucharest", "Bulgar", "Kiev", "Sofia"], answer: 3}, 
    {question: "Which of these is a prime number?", choices: ["367", "377", "387", "407"], answer: 0}, 
    {question: "Which team won the first Superbowl?", choices: ["Chiefs", "Packers", "Bears", "Broncos"], answer: 1}, 
    {question: "Who wrote the music for Les Miserables?", choices: ["John Williams", "Lloyd Webber", "Rodgers & Hammerstein", "Boublil & Schonberg"], answer: 3},
    {question: "", choices: [""], answer: undefined}
]; 

var nextq;
var score = 0;

$("#score").html(score);

function cycle(){
nextq = set.shift();    
}

cycle();
nextQuestion();

var select;
$( ".button" ).click(function() {
select = $( "input:radio[name=answer]:checked" ).val();
        console.log(select);

    if (select == nextq.answer) {
        $("#correct").html("Correct");
        $("#correct").css( "color", "green" );
        score++;
        $("#score").html(score);
    }
    else {$("#correct").html("Incorrect");
        $("#correct").css( "color", "red" );
         };

clear();
cycle();
nextQuestion();
endQuiz();
   });    

$("#score").html(score);

function nextQuestion(){
    $("#askQ").html(nextq.question);

    //need to print to label of radio button
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
    if (set[0] == null) { 
    $("#askQ").html("Final Score: " + score + " of 5");
    $("#askQ").css("font-size", "+=20");
    $("input[value='0']").next().text("");
    $("input[value='1']").next().text("");
    $("input[value='2']").next().text("");
    $("input[value='3']").next().text("");
    $(".radios").hide();
    $( ".button" ).hide();  
    };
}
        