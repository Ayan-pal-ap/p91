player1name=localStorage.getItem("player_1name");
player2name=localStorage.getItem("player_2name");
document.getElementById("player_1_name").innerHTML=player1name;
document.getElementById("player_2_name").innerHTML=player2name;
function send(){
 Number1=document.getElementById("word").value;
 Number2=document.getElementById("word2").value;
 anser=parseInt(Number1)*parseInt(Number2);
 ques="<h4>"+Number1+"X"+Number2+"</h4>";
 input="<div> ans: <input type='text' id='ans'>";
btn="<button onclick='check()'> check</button>";
row=ques+input+btn;
document.getElementById("output").innerHTML=row;
}
