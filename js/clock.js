document.getElementById("myName").innerHTML = prompt("Lütfen adınızı ve soyadınızı giriniz")

function showTime() {
    let date = new Date().toISOString();
    document.getElementById("myClock").innerText = date.substring(0,19).replace("T","\n")
    setTimeout(function(){ showTime() }, 1000);
  }
  
  showTime();
