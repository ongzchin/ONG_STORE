function focusme(x)
{
  // let x= document.getElementById("nametxt");
  x.style.backgroundColor="#ffffe6";//access style through DOM
}

function blurme(x){
  // let x= document.getElementById("nametxt");
  x.style.backgroundColor="White";//access style through DOM
}

function selectgender()
{
  let x=document.getElementById("select").value;
  alert(x);
}

function checklength(x){
  if(x.value.length<3){
    alert("The length is less than 3 digit");
    x.style.backgroundColor="#ffffe6";
  }
  else{
    blurme(x);
  }
}

function checkValidation(){
  let name=document.getElementById("name");
  let email=document.getElementById("emailtxt");
  let address=document.getElementById("add");
  let phone1=document.getElementById("phone1");
  let phone2=document.getElementById("phone2");
  let user=document.getElementById("username");
  let pass=document.getElementById("password");
  let height=document.getElementById("height");

  if(name.value==""){
    alert(name.name+"Must be filled");
  }
  if(email.value==""){
    alert(email.name+"Must be filled");
  }
  if(email.value.indexOf("@",0)<0){
    alert("Please enter a valid e-mail address");

  }
  let p=password.getAttributes("[A-Za-z0-9!@#$%^*()]{8}");
  let testpattern=RegExp(p);//register expression (js)
  if(!testpattern(password.value)){
    alert("password not match");
    password.focus();
    return false;
  }
  return true;

}



function registeruser() {

	let name = document.getElementById("name").value;
	let phone = document.getElementById("phone1").value;
	let phone2=document.getElementById("phone2").value;
	let email = document.getElementById("emailtxt").value;
	let address = document.getElementById("address").value;
	let password = document.getElementById("password").value;
	let height = document.getElementById("height").value;
	let username = document.getElementById("username").value;


	if (name == "") {
		alert("Name must be filled.");

		return false;
	}

	if (phone == "" || isNaN(phone)) {   //is not a number
		alert("Please enter a valid phone number.");

		return false;
	}

	// if (ic == "" || isNaN(ic)) {         //is not a number
	// 	alert("Please enter a valid IC number.");
  //
	// 	return false;
	// }

	if (email == "") {
		alert("Email must be filled.");

		return false;
	}

	if (email.indexOf("@", 0) < 0) {
		alert("Please enter a valid email address.");

		return false;
	}

	if (email.indexOf(".", 0) < 0) {
		alert("Please enter a valid email address.");

		return false;
	}

	if (password == "" || password.length < 3) {
		alert("Password must be at least 3 characters long.");

		return false;
	}

	// Store data in local storage
	localStorage.setItem("name", name);
	localStorage.setItem("email", email);
	localStorage.setItem("phone", phone);
	localStorage.setItem("phone2", phone2);
	localStorage.setItem("address", address);
	localStorage.setItem("height", height);
	localStorage.setItem("username", username);
	localStorage.setItem("password", password);
	alert("Signup successful!");
	location.href = "loginin.html";
}



function loginuser() {
	var email = document.getElementById("loginemail").value;
	var password = document.getElementById("loginpassword").value;

	// Retrieve the data from local storage
	var storedEmail = localStorage.getItem("email");
	var storedPassword = localStorage.getItem("password");

	// Check if the email and password match the stored data
	if (storedEmail == email && storedPassword == password) {
		alert("Login Successful!");
		// Redirect to another page or do other actions here
		location.href = "./index.html";
	} else {
		alert("Invalid email or password!");
	}
}

function logout(){
  localStorage.clear;
}
