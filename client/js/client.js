var sock = io();

sock.on('msg',onMessage);

function onMessage(deck)
{
  $( "#card-deck-p2" ).empty();
  for(i=0;i<deck.length;i++)
  {
    card_temp=deck[i];
    var strng=' <li id="'+card_temp+'" class="deck-stack"><img class="card-stack" src=".\\images\\USA-cards\\'+card_temp+'.png"> </img></li>';

    $( "#card-deck-p2" ).append(strng);
     $('#next-turn-id').removeAttr("disabled");
     $('#launch-turn-id').removeAttr("disabled");
     $("#you").css("color", "#9c96f1");
     $("#next-turn-id").css("color", "red");
     $("#launch-turn-id").css("color", "red");
      $("#opponent").css("color", "red");
      $("#whosturn").empty();
      $("#whosturn").append("Your Turn");
      $( ".card-space" ).append( "<embed src='./mp3/Casino sound package/chipsHandle6.wav' autostart='true' loop='true' width='2' height='0'>");


  }
}

function sendUpdate(deck)
{
  sock.emit('msg',deck);
  $('#next-turn-id').attr("disabled","enabled");
  $('#launch-turn-id').attr("disabled","enabled");
  $("#you").css("color", "red");
  $("#opponent").css("color", "#9c96f1");
  $("#next-turn-id").css("color", "grey");
  $("#launch-turn-id").css("color", "grey");
   $("#whosturn").empty();
   $("#whosturn").append("Opponent's Turn");
$( ".card-space" ).append( "<embed src='./mp3/Casino sound package/chipsHandle6.wav' autostart='true' loop='true' width='2' height='0'>");
}
