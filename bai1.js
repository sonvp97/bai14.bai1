function processConFirm(answer){
    let result = "";
    if (answer) {
        result = "Excellent. we'll play a nice game of chess.";
    }
    else {
        result = "Maybe later then.";
    }
    return result;
}
let confirmAnswer = confirm("Shall we play a game?");
let theAnswer = processConFirm(confirmAnswer);
alert(theAnswer);
