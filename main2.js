player_1 = localStorage.getItem("player_1")
player_2 = localStorage.getItem("player_2")

player1_score =0;
player2_score =0;

document.getElementById("player1_name").innerHTML = player_1+" : ";
document.getElementById("player2_name").innerHTML = player_2+" : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("question_turn").innerHTML = "Question Turn : "+player_1;
document.getElementById("answer_turn").innerHTML = "Answer Turn : "+player_2;

function word(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    document.getElementById("q_text").innerHTML = number1 +" X "+ number2
}