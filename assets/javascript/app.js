$(document).ready(function() {
// Link to Firebase
var url = new Firebase("http://rockpaperscissorsmp.firebaseIO.com");
	gameData = url;

var playerCount = 0;
// --------------------------------------------------------------
 
 // Capture Button Click
$("#startBtn").on("click", function() {
if (playerCount == 0) {
	var player1 = $('#nameInput').val().trim();
	var p1Wins = 0;
	var p1Loss = 0;

	// Code for the push
	gameData.push({
		name: player1,
		wins: p1Wins,
		losses: p1Loss,
	})
	playerCount = ;
	$('#startGame').hide();
	$('#gameStatus').html("<p class='text-center'>Hi!  " + player1 + " you are player 1</p>")
	console.log(playerCount);
} else {
	var player2 = $('#nameInput').val().trim();
	var p2Wins = 0;
	var p2Loss = 0;

	// Code for the push
	gameData.push({
		name: player2,
		wins: p2Wins,
		losses: p2Loss,
	})
	$('#startGame').hide();
	$('#gameStatus').html("<p>Hi!  " + player2 + "you are player 2</p>")
}

	// Don't refresh the page!
	return false;
});

//Firebase watcher + initial loader HINT: .on("value")
gameData.on("child_added", function(snapshot) {

	// Log everything that's coming out of snapshot
	console.log(snapshot.val());


});