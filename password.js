function validate(){
    var uname = document.getElementById("uname");
    var password = document.getElementById("password");

    if(uname.value.trim() == "Aquib" && password.value.trim()=="1111"){
        return true;
    }
    else{
        alert("Please fill the correct credentials!");
        return false;
    }
}