var qr = document.getElementById("camaraqr");
var iniciodesesion = document.getElementById("datosdeinicio");
qr.style.display = "none";
function stopDefAction(evt) {
    evt.preventDefault();
  }
function go() {
    if (document.getElementById("user").value =="alpura" && document.getElementById("pass").value == "123"){ 
            console.log("alpura");
            sessionStorage.setItem("id","alpura");
            qr.style.display = "block";
            iniciodesesion.style.display = "none";
            

    }else if (document.getElementById("user").value =="prueba" && document.getElementById("pass").value == "123"){
        console.log("prueba");
        sessionStorage.setItem("id","prueba");
        window.open("/QR.html", "_self");  
    } 
       
        
} 

   