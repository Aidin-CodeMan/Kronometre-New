window.onload = function () {
    var saniye = 00;
    var salise = 00;
    var saniyeElemani = document.getElementById('saniye');
    var saliseElemani = document.getElementById('salise');
    var baslamaButonu = document.getElementById('baslama');
    var durdurmaButonu = document.getElementById('durdurma');
    var sifirlamaButonu = document.getElementById('sifirlama');
    var Interval;
    x = 0;




    durdurmaButonu.onclick = function () {
        
        if(x == 0){
        durdurmaButonu.innerHTML = 'Dur';
        clearInterval(Interval);
        Interval = setInterval(zamaniBaslat, 10);
        x = 1;
        }else{
            durdurmaButonu.innerHTML = 'Devam';
            clearInterval(Interval);
        
            x = 0;
    
    }

}

    sifirlamaButonu.onclick = function () {
        durdurmaButonu.innerHTML = 'Başlat';
        x = 0;
        clearInterval(Interval);
        salise = "00";
        saniye = "00";
        saliseElemani.innerHTML = salise;
        saniyeElemani.innerHTML = saniye;
 
    }

    function zamaniBaslat() {
        salise++;

        if (salise <= 9) {
            saliseElemani.innerHTML = "0" + salise;
        }

        if (salise > 9) {
            saliseElemani.innerHTML = salise;
        }
        if (salise > 99) {
            console.log("saniye");
            saniye++;
            saniyeElemani.innerHTML = "0" + saniye;
            salise = 0;
            saliseElemani.innerHTML = "0" + 0;
        }

        if (saniye > 9) {
            saniyeElemani.innerHTML = saniye;
        }
    }
}