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
  }
}

function sendUpdate(deck)
{
  sock.emit('msg',deck);
}
