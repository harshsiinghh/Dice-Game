var randomNumber = (Math.random()*6)+1;
randomNumber= Math.floor(randomNumber);
var randomdice = "dice"+ randomNumber + ".png";
var randomImage = "images/"+ randomdice;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage)
var randomNumber1 = (Math.random()*6)+1;
randomNumber1= Math.floor(randomNumber1);
var randomdice1 = "dice"+ randomNumber1 + ".png";
var randomImage1 = "images/"+ randomdice1;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage1)
if(randomNumber>randomNumber1){
  document.querySelector("h1").innerHTML="🚩 Player 1 wins";
}
else if(randomNumber<randomNumber1){
  document.querySelector("h1").innerHTML="Player 2 wins 🚩";
}
else{
  document.querySelector("h1").innerHTML="🚩 Draw 🚩";
}
