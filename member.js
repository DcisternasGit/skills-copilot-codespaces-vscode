function skillMember() {
    var member = document.getElementById("member").value;
    var memberError = document.getElementById("memberError");
    var memberReg = /^[0-9]{1,2}$/;

    if (!memberReg.test(member)) {
        memberError.textContent = "Por favor, ingresa un número válido (0-99).";
        return false;
    } else {
        memberError.textContent = "";
    }

    return true;
}