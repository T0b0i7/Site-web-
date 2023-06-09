letsec= document.getElementById("sec")
letsec = document.getElementById("min")
letsec = document.getElementById("hr")

function rotate() {
    var today = Date(); 
    var todayHour = today.getHours(); 
    var todayMin = today.getMinutes(); 
    var todaySec = today.getSeconds(); 

    sec.style.transform = "rotate(" + 6 * todaySec +"deg)";
    setTimeout(rotate , 1000)
}
rotate();