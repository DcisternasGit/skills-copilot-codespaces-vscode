function skillMember(){
    var member = document.getElementById("member").value;
    var memberError = document.getElementById("memberError");
    var memberReg = /^[0-9]{1,2}$/;
    if(!memberReg.test(member)){
        memberError.innerHTML = "Please enter a valid number";
        return false;
    }
    else{
        memberError.innerHTML = "";
    }
    return true;
}