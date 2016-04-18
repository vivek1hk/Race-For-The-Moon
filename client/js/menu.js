$(".how-to-play").hide();
$(".more-about-SR").hide();
$(".about-rftm").hide();
$(".signup-game").hide();
$(".login-game").hide();

if(localStorage.getItem("Name"))
  console.log("yes");

function StartGame()
{


  $(".how-to-play").hide();
  $(".more-about-SR").hide();
  $(".about-rftm").hide();


}

function HowToPlay()
{
  $(".how-to-play").show();
  $(".more-about-SR").hide();
  $(".about-rftm").hide();
  $(".start-game").hide();

}

function MoreAboutSR()
{
  $(".how-to-play").hide();
  $(".more-about-SR").show();
  $(".about-rftm").hide();
  $(".start-game").hide();
}

function AboutRFTM()
{
  $(".how-to-play").hide();
  $(".more-about-SR").hide();
  $(".about-rftm").show();
  $(".start-game").hide();
}

function Signup()
{
  var name;
  var age;
  var email;
  var pwd;
  var c_pwd;

  name=$(".p-name").val();
  age=$(".p-age").val();
  email=$(".p-email").val();
  pwd=$(".p-pwd").val();
  c_pwd=$(".p-confirm-pwd").val();





  if(name=="" || age=="" )
  {
    alert("Enter Both Age and Name");
  }
  else {

    if(pwd==c_pwd)
    {
      localStorage.setItem("Name", name);
      localStorage.setItem("age", age);
      localStorage.setItem("Email", email);
      localStorage.setItem("Password", pwd);
       window.location="./gameplay.html";
    }
    else {
      alert("Passwords do not match");
    }


  }
  console.log("Name:"+name+" Age:"+age );
}

function Signin()
{
    email=$(".u-email").val();
    pwd=$(".u-pwd").val();
    l_pwd=localStorage.getItem("Password");
    l_email=localStorage.getItem("Email");
    if(l_pwd==pwd && email==l_email )
    {
       window.location="./gameplay.html";
    }
    else {
      alert("Password and email do not match");
    }
}

function SignupForm()
{
   $(".signup-game").show();
   $(".login-game").hide();
}

function LoginForm()
{
  $(".login-game").show();
  $(".signup-game").hide();
}
