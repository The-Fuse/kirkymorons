var jeemainsmarks = document.getElementById("jeemains");
var jeeadvacedmarks = document.getElementById("jeeadvanced");
var toppermarks = document.getElementById("topper");
var totaljee =  document.getElementById("jeeadvancedtotal");
function calculatescore(){
    var jeemains=jeemainsmarks.value;
    var jeeadvaced = jeeadvacedmarks.value;
    var topper=toppermarks.value;
    var totalmarks=totaljee.value;
    var score = 2-((jeemains*0.01)+((jeeadvaced)/(totalmarks)))+topper;
    score = Math.floor(score * 100) / 100 
    document.getElementById("score").textContent=score.toString();
    
}
