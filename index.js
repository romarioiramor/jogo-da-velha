
$(document).ready(function() {
    $('#staticBackdrop').modal('show');

    $('#button_start_game').click(function () {
        capturaDadosJogador();
    });

    $("td").click(function() {
        if ($(this).html() == "") {
            preencherJogada(this);
        }
    });
});

function capturaDadosJogador() {

    var playerOne = $('input[name="input_player_one"]').val();

    var playerTwo = $('input[name="input_player_two"]').val();

    var startGame = true;

    if (playerOne == "") {
        alert("Preencha o campo com o nome do primeiro jogar!");
        startGame = false;
    }

    if (playerTwo == "") {
        alert("Preencha o campo com o nome do segundo jogar!");
        startGame = false;
    }

    if (startGame == true) {
        $('#staticBackdrop').modal('hide');
        preencheNomeJogadores();
        $('#game').show('slow');

    }

}

function preencheNomeJogadores() {

    var playerOne = $("input[name='input_player_one']").val();

    var playerTwo = $("input[name='input_player_two']").val();

    $("#span_player_one").html(playerOne);
    $("#span_player_two").html(playerTwo);

}

var ultimaJogada = "";

function preencherJogada(coluna) {
    var jogadaAtual;
    if (ultimaJogada == "") {
        jogadaAtual = "X";
    }
    if (ultimaJogada == "O") {
        jogadaAtual = "X";
    }
    if (ultimaJogada == "X") {
        jogadaAtual = "O";
    }
    ultimaJogada = jogadaAtual;

    $(coluna).html(jogadaAtual);
    
}