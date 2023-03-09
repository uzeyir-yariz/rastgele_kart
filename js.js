// diziler 
const imgs = [
    'images/beşik_tas.png', 
    'images/fener_bahce.png', 
    'images/galata_saray.png', 
    'images/liverpool.png', 
    'images/manchester_city.png', 
    'images/trapzom_spor.png'
];

function rastgeleTakım(){

    let rand1 = imgs[Math.floor(Math.random() * imgs.length)]
    let rand2 = imgs[Math.floor(Math.random() * imgs.length)]
    let rand3 = imgs[Math.floor(Math.random() * imgs.length)]

    document.getElementById("picture_1").src = rand1;
    document.getElementById("picture_2").src = rand2;
    document.getElementById("picture_3").src = rand3;

    if(rand1 == rand2 && rand2 == rand3){
        document.getElementById("result").innerHTML = "kazandınız";
        document.getElementById("btn").disabled = true;
    }else{

    }
}

/*
window.onload = function(){
    var img = document.getElementsByClassName("default");
    img.src = 'images/şampiyonlar ligi.png';
}
*/