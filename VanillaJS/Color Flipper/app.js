const colors = ["green","red","yellow","rgba(133,122,200)","#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
  // Get Random number between 0 -4
  var randomNumber = getRandomNumber(colors.length);
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
})

function getRandomNumber(arrayLength) {
  return Math.floor(Math.random()*arrayLength);
}
