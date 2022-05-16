
function validate() {
    
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var pwdformat = /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    var inemail = document.getElementById("inemail");
    var inpwd = document.getElementById("inpwd");
    var infirst = document.getElementById("infirst");
    var inlast = document.getElementById("inlast");

    var check1 = document.getElementById("inlineCheckbox1").value;
    var check2 = document.getElementById("inlineCheckbox2").value;

    console.log(check1);
    console.log(check2);

    if(email == ""){
        inemail.textContent = "Please Fill Email!!";
    }else if(email.match(mailformat)){
        inemail.textContent = "";
        
    }else{
        inemail.textContent = "Invalid Email";
    }//Validate Email

    if(pwd == ""){
        inpwd.textContent = "Please Fill Password!!";
    }else if(pwd.match(pwdformat)){
        inpwd.textContent = "";
    }else{
        inpwd.textContent = "Weak Password!!";
    }//Validate Password

    if(firstname == ""){
        infirst.textContent = "Please Fill First Name!!";
    }else{
        infirst.textContent = "";
    }

    if(lastname == ""){
        inlast.textContent = "Please Fill Last Name!!";
    }else{
        inlast.textContent = "";
    }

    if(inemail.textContent =="" && inpwd.textContent =="" && infirst.textContent =="" && inlast.textContent =="" && check1=="2" && check2=="2"){

        window.location.href="success.html?email="+email+"&pwd="+pwd+"&firstname="+firstname+"&lastname="+lastname+"&check1="+check1+"&check2="+check2

    }


    if(check1 == "1"){
        document.getElementById("inch1").innerHTML = "Please check!";
    }else{
        document.getElementById("inch1").innerHTML = "";
    }

    if(check2 == "1"){
        document.getElementById("inch2").innerHTML = "Please Check";
    }else{
        document.getElementById("inch2").innerHTML = "";
    }
}

function checkOne(){
    var check1 = document.getElementById("inlineCheckbox1");
    if(check1.checked == false){
        document.getElementById("inlineCheckbox1").value = "1";
    }else{
        document.getElementById("inlineCheckbox1").value = "2";
    }
}

function checkTwo(){
    var check2 = document.getElementById("inlineCheckbox2");
    if(check2.checked == false){
        document.getElementById("inlineCheckbox2").value = "1";
    }
    else{
        document.getElementById("inlineCheckbox2").value = "2";
    }
}

function emailFocus(){
    document.getElementById("email").style.background="LightGray";
}

function mouseOver(){
    alert("Sign In Button");
}

function pwdDown(){
    document.getElementById("pwd").style.background = "LightGray";
}