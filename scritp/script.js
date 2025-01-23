var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}


window.onload = function(){

    var iframe = document.body.querySelector("iframe");
 
    iframe.onload = function(){
       var iframeDocument = iframe.contentDocument || iframe.contentWindow.document,
       ads = iframeDocument.body.querySelector("#aw0 img");
 
       ads.style.cssText = "width: 100%; height: auto;";
    }
 
 }