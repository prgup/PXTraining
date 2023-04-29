function validateData() {
    // debugger
    const li = ["pnxt1", "pnxt2", "pnxt3", "pnxt4"];
    var username = document.getElementById("username").value;

    var password = document.getElementById("pswrd").value;
    
    if (li.includes(username) && password==="test@1234" ){
        console.log("user : ",username);
        alert('Login Success');
        return true;
        
        
    }
    else {
        window.alert("Trespassers Will Be Persecuted, Use pnxt1/test@1234");
        return false;
        
    }

}