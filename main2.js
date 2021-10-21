player_1 = localStorage.getItem("player_1")
player_2 = localStorage.getItem("player_2")

player1_score =0;
player2_score =0;

question_turn = "player_1";
answer_turn = "player_2";

document.getElementById("player1_name").innerHTML = player_1+" : ";
document.getElementById("player2_name").innerHTML = player_2+" : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("question_turn").innerHTML = "Question Turn : "+player_1;
document.getElementById("answer_turn").innerHTML = "Answer Turn : "+player_2;

function number(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    answer = parseInt(number1)*parseInt(number2);
    document.getElementById("q_text").innerHTML = number1 +" X "+ number2

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

function Check(){
    get_answer = document.getElementById("a_input").value;
    if(get_answer == answer){
        if(answer_turn == "player_1"){
            updated_player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = updated_player1_score;
            question_turn = "player_2";
            document.getElementById("question_turn").innerHTML = "Question Turn : "+player_1;
        }
        else{
            updated_player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = updated_player2_score;
            question_turn = "player_1";
            document.getElementById("question_turn").innerHTML = "Question Turn : "+player_2;
        }
    }
}