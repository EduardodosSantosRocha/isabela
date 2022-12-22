var enviar = document.getElementById("enviar");

enviar.addEventListener('click',()=> {
        
        var audio = new Audio("./mus/mus.mp3");
        audio.addEventListener('canplaythrough', function() {
            audio.play();
        });
});