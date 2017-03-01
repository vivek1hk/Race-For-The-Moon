var htop=$(".scroller-content").position().top;
var rtop1=$(".main-logo").position().top;
var rtop2=$(".main-logo").position().top;
var opUp=false;
var opDown= true;
var opacity_val=1;
rocket1Interval=window.setInterval(scrollRocket1,105);
rocket2Interval=window.setInterval(scrollRocket2,95);
textInterval=window.setInterval(scrollText,55);
opacityInterval=window.setInterval(setOpacity,90);





function scrollText()
{
    htop--;
  //  console.log($(".scroller-content").offset().top);
   $(".scroller-content").css({ top: htop+'px' });

}

function scrollRocket1()
{
    rtop1--;
   $(".scroller-rocket1").css({ top: rtop1+'px' });


}
function scrollRocket2()
{
    rtop2--;
    console.log(rtop2);
   $(".scroller-rocket2").css({ top: rtop2+'px' });

}

function setOpacity()
{
    if(opacity_val > 1)
    {
      opUp=false;
      opDown=true;
    }
    if(opacity_val < 0)
    {
      opUp=true;
      opDown=false;
    }

    if(opUp)
    {
      $(".rocket-button").css({ opacity: opacity_val });
      opacity_val = opacity_val+0.1;
    }
    if(opDown)
    {
      $(".rocket-button").css({ opacity: opacity_val });
      opacity_val = opacity_val-0.1;
    }

}

function buttonBreathe()
{
    if(opacity_val > 1)
    {
      opUp=false;
      opDown=true;
    }
    if(opacity_val < 0)
    {
      opUp=true;
      opDown=false;
    }

    if(opUp)
    {
      $(".rocket-button").css({ opacity: opacity_val });
      opacity_val = opacity_val+0.1;
    }
    if(opDown)
    {
      $(".rocket-button").css({ opacity: opacity_val });
      opacity_val = opacity_val-0.1;
    }

}
