
var u_name=localStorage.getItem("Name");

$(".uname").html(u_name);
function changeOpacity()
{
  $(this).css("opacity","0.4");
  $(".card-image-ussr").css("opacity","0.4");
  console.log("Here");
}

function chooseTeam()
{

  window.location="./gameplaymain.html";
}
