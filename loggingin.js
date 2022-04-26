"use strict";

window.onload=function(){
	
	/*var sign_up = document.getElementById("sign_up");
	var ime = document.getElementById("ime_su");
	var priimek =document.getElementById("priimek_su");
	var mail = document.getElementById("e-mail_su");
	var pass = document.getElementById("pass_su");
	var age = document.getElementById("leta");
	var phone = document.getElementById("phone");

	sign_up.addEventListener("click",validate_su);
	ime.addEventListener("focus",clear);
	priimek.addEventListener("focus",clear);
	mail.addEventListener("focus",clear);
	pass.addEventListener("focus",clear);
	age.addEventListener("focus",clear);
	phone.addEventListener("focus",clear);

	function validate_su(){
		var valide = 1;
		if(ime.value == "" || ime.value.length < 3){
			ime.value = "Obvezno polje";
			ime.style.color = "red";
			valide = 0;
		}
		if(priimek.value== "" || priimek.value.length < 3){
			priimek.value = "Obvezno polje";
			priimek.style.color = "red";
			valide = 0;
		}
		if(mail.value == "" || mail.value.indexOf("@") == -1 || mail.value.lastIndexOf(".") < mail.value.indexOf("@")){
			mail.value = "E-naslov ni validen";
			mail.style.color = "red";
			valide = 0;
		}
		if(pass.value == "" || pass.value.length < 8){
			pass.value = "Obvezno polje";
			pass.style.color = "red";
			valide = 0;
		}
		if(age.value < 10 || age.value > 150){
			pass.value = "Obvezno polje";
			pass.style.color = "red";
			valide = 0;
		}
		if(valide == 1){
			window.location.assign("registering.php");
		}
	}
	
	function clear(){
		this.value = "";
		this.style.color = "white";
	}*/
	
	var signup = document.getElementById("sup");
	var login = document.getElementById("lin");
	
	signup.addEventListener("click", showsu);
	login.addEventListener("click", showli);
	
	function showsu(){
		document.getElementById("login_form").style.display = "none";
		document.getElementById("signup_form").style.display = "block";
	}
	
	function showli(){
		document.getElementById("signup_form").style.display = "none";
		document.getElementById("login_form").style.display = "block";
	}
	
	
	/*var log_in = document.getElementById("log_in");
	
	log_in.addEventListener('click', validate_li);
	
	var mailli = document.getElementById("e-mail_li");
	var passli = document.getElementById("pass_li");
	
	mailli.addEventListener('focus', clear);
	passli.addEventListener('focus', clear);
	
	function validate_li(){
		var valide = 1;
		if(mailli.value == "" || mailli.value.indexOf("@") == -1 || mailli.value.lastIndexOf(".") < mailli.value.indexOf("@")){
			mailli.value = "E-naslov ni validen";
			mailli.style.color = "red";
			valide = 0;
		}
		if(passli.value == "" || passli.value.length < 8){
			passli.value = "Obvezno polje";
			passli.style.color = "red";
			valide = 0;
		}
		if(valide == 1){
			window.location.assign("loggingin.php");
		}
	}*/
}