let td = document.querySelectorAll("td");
let monitor = document.getElementById("monitor")
// let equal = document.getElementById("equal")
console.log(td)
td.forEach((e)=>{
    if(e.innerHTML == "="){
        e.addEventListener("click",function () {
            console.log(monitor.innerHTML);
            monitor.innerHTML =+ eval(monitor.innerHTML)        
        })
    }else if (e.innerHTML=="c") {
        e.addEventListener("click",function () {
            monitor.innerHTML = ""
        })
    }
    else{
        e.addEventListener("click",function() {
            
            monitor.innerHTML += e.innerHTML

        })
    }
    
})
