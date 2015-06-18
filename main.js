

//make top bar work.

function changepanel(num){
document.getElementById("moneypanel").style.display="none";
document.getElementById("fishpanel").style.display="none";
document.getElementById("plantpanel").style.display="none";
document.getElementById("filterpanel").style.display="none";
document.getElementById("businesspanel").style.display="none";
document.getElementById("ponicpanel").style.display="none";

	if(num==1){
		document.getElementById("moneyicon").style.background="#E6FFE6";
		document.getElementById("moneypanel").style.display="block";
		}else{
		document.getElementById("moneyicon").style.background="none";
		}
	if(num==2){
		document.getElementById("fishicon").style.background="#E6FFE6";
		document.getElementById("fishpanel").style.display="block";
		}else{
		document.getElementById("fishicon").style.background="none";
		}
	if(num==3){
		document.getElementById("planticon").style.background="#E6FFE6";
		document.getElementById("plantpanel").style.display="block";
		}else{
		document.getElementById("planticon").style.background="none";
		}
	if(num==4){
		document.getElementById("filtericon").style.background="#E6FFE6";
		document.getElementById("filterpanel").style.display="block";
		}else{
		document.getElementById("filtericon").style.background="none";
		}
	if(num==5){
		document.getElementById("businessicon").style.background="#E6FFE6";
		document.getElementById("businesspanel").style.display="block";
		}else{
		document.getElementById("businessicon").style.background="none";
		}
	if(num==6){
		document.getElementById("ponicicon").style.background="#E6FFE6";
		document.getElementById("ponicpanel").style.display="block";
		}else{
		document.getElementById("ponicicon").style.background="none";
		}

}