const img = [
    'images/pixil-frame-1.png',
    'images/pixil-frame-2.png',
    'images/pixil-frame-3.png',
    'images/pixil-frame-4.png',
    'images/pixil-frame-5.png',
    'images/pixil-frame-6.png'];

function rastgele(){
    let randnum1 = img[Math.floor(Math.random() * img.length)];
    let randnum2 = img[Math.floor(Math.random() * img.length)];
    let randnum3 = img[Math.floor(Math.random() * img.length)];

    document.getElementById("fig_1").src = randnum1;
    document.getElementById("fig_2").src = randnum2;
    document.getElementById("fig_3").src = randnum3;

    if(randnum1 == randnum2 && randnum2 == randnum3){
        document.getElementById("result").innerHTML = "kazandınız";
        document.getElementById("btn").disabled = true;
    }else{

    }
}

function rastgeleDevamlı(){
    document.getElementById("btn").disabled = true;
    document.getElementById("btn_1").disabled = true;

    let = i = 0;
    let intervalId = setInterval(function(){
        let randnum1 = img[Math.floor(Math.random() * img.length)];
        let randnum2 = img[Math.floor(Math.random() * img.length)];
        let randnum3 = img[Math.floor(Math.random() * img.length)];
        
        document.getElementById("fig_1").src = randnum1;
        document.getElementById("fig_2").src = randnum2;
        document.getElementById("fig_3").src = randnum3;
        
        if(randnum1 == randnum2 && randnum2 == randnum3){
            document.getElementById("result").innerHTML = "kazandınız şu kadar denediniz : " + i;
            clearInterval(intervalId);
        }else{
            
        }
        i++;
    }, 250);

}