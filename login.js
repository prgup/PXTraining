// <!-- Gainsight PX Tag-->

(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
  var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
  var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-HSFMXCXG5UBB-2");  

// <!-- Gainsight PX Tag-->



function validateData() {
    // debugger
    const li = ["pnxt1", "pnxt2", "pnxt3", "pnxt4"];
    var username = document.getElementById("username").value;

    var password = document.getElementById("pswrd").value;
    
    if (li.includes(username) && password==="test@1234" ){
        // console.log("user : ",username);
        //passing user and account objects:
        aptrinsic("identify",
        {
            //User Fields
              "id": username, // Required for logged in app users
              "email": username.concat("@gs.com"),
              "firstName": "Iron",
              "lastName": "Man"
            },
            {
            //Account Fields
              "id": username, //Required
              "name":"Iron Man Machine"
            });


        alert('Login Success');
        return true;
        
        
    }
    else {
        window.alert("Trespassers Will Be Persecuted, Use pnxt1/test@1234");
        return false;
        
    }

}