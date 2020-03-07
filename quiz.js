var quiznumber = 0;
var question = ['question 1', 'question 2'];

function quiz(){
    document.getElementById("question").innerHTML = question[quiznumber];
    quiznumber++;
}