var deck = new Array();
var discard = new Array();
var ReStack = ["1Re","2Re","3Re"];
var FeStack = ["1Fe","2Fe","3Fe"];
var SpStack = ["1Sp","2Sp"];
var StStack = ["1St","2St","3St","4St"];
var AsStack = ["1As","2As"];
var limit_flag=false;
var turn_count=1;
var funding=50;
var research_value=0;
var level=1;
var card_list = $("#card-list").html();

var funding_val={"1Re":-1,"2Re":-1,"3Re":-1,"1Fe":-1,"2Fe":-1,"3Fe":-1,"1Sp":-3,"2Sp":-2,"1St":-2,"2St":-3,"3St":-3,"4St":-3,"1As":-2,"2As":-2};
var research_val={"1Re":0,"2Re":0,"3Re":3,"1Fe":2,"2Fe":2,"3Fe":2,"1Sp":2,"2Sp":1,"1St":0,"2St":0,"3St":5,"4St":5,"1As":4,"2As":5};
var level_val={1:"1 Lunar Mission", 2:"Oribital Mission",3:"Lunar Landing"};
console.log(funding_val["1Re"]);

var P1_research;
var P1_fund;
var P1_sp_points;

$('body').on('click', 'li.deck-stack', function() {
    // do something


   var id = $(this).attr('id');
   console.log(deck);
  discardFromDeck(id);
  console.log(deck);
  $(this).remove();

});



var listItems = $("#card-deck").children();
var count = listItems.length;
if(count == 6)
  alert("You cannot have more than 6 cards on deck");



//************************************************************ Research *****************************************************

$( "#Research" ).click(function() {

var card_temp;
var listrng;
var listItems = $("#card-deck").children();
var count = listItems.length;
if(count == 6)
  alert("You cannot have more than 6 cards on deck");
else {


if(ReStack.length==0)
{
  alert("No more cards of this type");
}
else {
  if(ReStack.length==1)
  {
    card_temp=ReStack.pop();
    listrng='<img class="card-stack" src=".\\images\\USA-cards\\NMC.png"> </img>';
  }
  else {
    card_temp=ReStack.pop();
    listrng='<img class="card-stack" src=".\\images\\USA-cards\\'+ReStack[ReStack.length-1]+'.png"> </img>';
  }
  deck.push(card_temp);

  var strng=' <li id="'+card_temp+'"class="deck-stack"><img class="card-stack" src=".\\images\\USA-cards\\'+card_temp+'.png"> </img></li>';

  $( "#card-deck").append(strng);
  $( "#Research" ).empty();
  $( "#Research" ).append(listrng);

}
}

});

//************************************************************ Fuel *****************************************************

$( "#Fuel" ).click(function() {

var card_temp;
var listrng;
var listItems = $("#card-deck").children();
var count = listItems.length;
if(count == 6)
  alert("You cannot have more than 6 cards on deck");
else {


if(FeStack.length==0)
{
  alert("No more cards of this type");
}
else {
  if(FeStack.length==1)
  {
    card_temp=FeStack.pop();
    listrng='<img class="card-stack" src=".\\images\\USA-cards\\NMC.png"> </img>';
  }
  else {
    card_temp=FeStack.pop();
    listrng='<img class="card-stack" src=".\\images\\USA-cards\\'+FeStack[FeStack.length-1]+'.png"> </img>';
  }
  deck.push(card_temp);

  var strng=' <li id="'+card_temp+'" class="deck-stack"><img class="card-stack" src=".\\images\\USA-cards\\'+card_temp+'.png"> </img></li>';

  $( "#card-deck").append(strng);
  $( "#Fuel" ).empty();
  $( "#Fuel" ).append(listrng);

}
}

});

//************************************************************ Special *****************************************************

$( "#Special" ).click(function() {

var card_temp;
var listrng;
var listItems = $("#card-deck").children();
var count = listItems.length;
if(count == 6)
  alert("You cannot have more than 6 cards on deck");
else {

if(SpStack.length==0)
{
  alert("No more cards of this type");
}
else {
  if(SpStack.length==1)
  {
    card_temp=SpStack.pop();
    listrng='<img class="card-stack" src=".\\images\\USA-cards\\NMC.png"> </img>';
  }
  else {
    card_temp=SpStack.pop();
    listrng='<img class="card-stack" src=".\\images\\USA-cards\\'+SpStack[SpStack.length-1]+'.png"> </img>';
  }
  deck.push(card_temp);

  var strng=' <li id="'+card_temp+'" class="deck-stack"><img class="card-stack" src=".\\images\\USA-cards\\'+card_temp+'.png"> </img></li>';

  $( "#card-deck").append(strng);
  $( "#Special" ).empty();
  $( "#Special" ).append(listrng);

}
}

});

//************************************************************ Staff *****************************************************

$( "#Staff" ).click(function() {

var card_temp;
var listrng;
var listItems = $("#card-deck").children();
var count = listItems.length;
if(count == 6)
  alert("You cannot have more than 6 cards on deck");
else {

if(StStack.length==0)
{
  alert("No more cards of this type");
}
else {
  if(StStack.length==1)
  {
    card_temp=StStack.pop();
    listrng='<img class="card-stack" src=".\\images\\USA-cards\\NMC.png"> </img>';
  }
  else {
    card_temp=StStack.pop();
    listrng='<img class="card-stack" src=".\\images\\USA-cards\\'+StStack[StStack.length-1]+'.png"> </img>';
  }
  deck.push(card_temp);

  var strng=' <li id="'+card_temp+'" class="deck-stack"><img class="card-stack" src=".\\images\\USA-cards\\'+card_temp+'.png"> </img></li>';

  $( "#card-deck").append(strng);
  $( "#Staff" ).empty();
  $( "#Staff" ).append(listrng);

}
}

});

//************************************************************ Astro *****************************************************

$( "#Astro" ).click(function() {

var card_temp;
var listrng;
var listItems = $("#card-deck").children();
var count = listItems.length;
if(count == 6)
  alert("You cannot have more than 6 cards on deck");
else {

if(AsStack.length==0)
{
  alert("No more cards of this type");
}
else {
  if(AsStack.length==1)
  {
    card_temp=AsStack.pop();
    listrng='<img class="card-stack" src=".\\images\\USA-cards\\NMC.png"> </img>';
  }
  else {
    card_temp=AsStack.pop();
    listrng='<img class="card-stack" src=".\\images\\USA-cards\\'+AsStack[AsStack.length-1]+'.png"> </img>';
  }
  deck.push(card_temp);

  var strng=' <li id="'+card_temp+'" class="deck-stack"><img class="card-stack" src=".\\images\\USA-cards\\'+card_temp+'.png"> </img></li>';

  $( "#card-deck").append(strng);
  $( "#Astro" ).empty();
  $( "#Astro" ).append(listrng);

}
}

});




function discardFromDeck(cardToDiscard)
{
  var index = deck.indexOf(cardToDiscard);
  deck.splice(index,1);
}

$( "#next-turn-id" ).click(function() {


    turn_count++;

  for(i=0;i<deck.length;i++)
  {

    research_value+=research_val[deck[i]];
    funding+=funding_val[deck[i]];
  }
  if(funding<0)
  {
    alert("Not Enough Funds, Game Over !!!")
    window.location="./gameplay.html";
  }
  else {
    var listrng= "LEVEL-"+level_val[level]+" <br> Turn-"+turn_count+"<br>Total Funding="+funding+"<br>Total Research="+research_value;
    console.log(funding);
    console.log(research_value);
    $( "#turn-count" ).empty();
    $( "#turn-count" ).append(listrng);

    sendUpdate(deck);
  }



});


$( "#launch-turn-id" ).click(function() {

  if(level<=3)
  {
  if(turn_count <= 3)
    alert("Too Soon to Launch");

else {
    if(research_value<50)
    {
      alert("Mission Failed - You just lost 10 funding");
      funding=funding-10;
      var listrng= "LEVEL-"+level_val[level]+" <br>Turn-"+turn_count+"<br>Total Funding="+funding+"<br>Total Research="+research_value;
      $( "#turn-count" ).empty();
      $( "#turn-count" ).append(listrng);


    }
    else {
      $("#card-list").empty();
      $("#card-list").append(card_list);
      alert("Mission Successfully Completed");
       ReStack = ["1Re","2Re","3Re"];
       FeStack = ["1Fe","2Fe","3Fe"];
       SpStack = ["1Sp","2Sp"];
       StStack = ["1St","2St","3St","4St"];
       AsStack = ["1As","2As"];
       limit_flag=false;
       turn_count=1;
       level++;
       funding=funding+(5-level)*10;
       $( "#card-deck" ).empty();
       var listrng= "LEVEL-"+level_val[level]+" <br>Turn-"+turn_count+"<br>Total Funding="+funding+"<br>Total Research="+research_value;
       $( "#turn-count" ).empty();
       $( "#turn-count" ).append(listrng);

    }

  }
}
else {
  alert("Congratulations - You won !");

    window.location="./gameplay.html";
  
}




});
