var set = [];
var nextq, prevq, rightanswers, select;
var score = 0;
var count = 1;
var totalQ = 5;
    
$("#score").html(score);
$("#count").html(count);
$("#total").html(totalQ);

$.getJSON('js/set.json', function(data) {
    $.each(data, function(index, item) {
        set.push(item);
        console.log(set.length);
    });
cycle();
nextQuestion();
});

function cycle(){
  nextq = set.shift();  
}

$( "#nextbutton" ).click(function() {
  select = $( "input:radio[name=answer]:checked" ).val();
    if (select == undefined){
    alert("Please select an answer");
    }
    else {
  set.push(nextq);
  if (count < 5){
    count++;
  }
  totalQ--;
  choose();
  $("#score").html(score);
  $("#count").html(count);
  $("#total").html(totalQ);
  clear();
  cycle();
  nextQuestion();
  endQuiz();
    }
});    

$( "#backbutton" ).click(function() {
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
  $("input:radio").prop( "checked", false );
}

function endQuiz(){
  if (totalQ == 0){
    $("#count").html(count);
    $("#askQ").html("Final Score: " + score + " of 5");
    $("#askQ").css("font-size", "+=20");
    $("input:radio").next().text("");
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