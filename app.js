var audio0= new Audio("songs/Jai Jai Narayan Narayan Hari Hari (Female) - Hari Darshan 320 Kbps.mp3");
var audio1 = new Audio("songs/Akhiyaan_Milaoon_Kabhi___Raja___Udit_Narayan___Alk.mp3");
var audio2 = new Audio("songs/Main_Deewana_Deewana_Vaada_Song.mp3");
var audio3 = new Audio("songs/Main_Ishq_Uska_Full_Song_Vaada.mp3");
function jai(i) {
        switch (i.value) {
            case "Play A":
                if(playing()==true){
                    audio0.play();
                    i.value = "Pause A";
                    i.innerHTML="Pause A";
                    break;
                }
                else alert("please pause ongoing music");
            case "Pause A":
                audio0.pause();
                i.value = "Play A";
                audio0.currentTime=0;
                i.innerHTML="Play A";
                break;
            case "Play S":
                if(playing()==true){
                    audio1.play();
                    i.value = "Pause S";
                    i.innerHTML="Pause S";
                    break;
                }
                else alert("please pause ongoing music");
            case "Pause S":
                audio1.pause();
                i.value = "Play S";
                audio1.currentTime=0;
                i.innerHTML="Play S";
                break;
            case "Play D":
                if(playing()==true){
                    audio2.play();
                    i.value = "Pause D";
                    i.innerHTML="Pause D";
                    break;
                }
                else alert("please pause ongoing music");
            case "Pause D":
                audio2.pause();
                i.value = "Play D";
                audio2.currentTime=0;
                i.innerHTML="Play D";
                break;
            case "Play F":
                if(playing()==true){
                    audio3.play();
                    i.value = "Pause F";
                    i.innerHTML="Pause F";
                    break;  
                }
                else alert("Please pause ongoing music");
            case "Pause F":
                audio3.pause();
                i.value = "Play F";
                audio3.currentTime=0;
                i.innerHTML="Play F";
                break;

        }
}
function playing(){
    var c=document.querySelectorAll("button");
    for(i=0; i<c.length; i++){
        var b=c[i].innerHTML.slice(0,6);
        console.log(b);
        if(b=="Pause "){
            return false;
        }
    }
    return true;
}

// if (i.value == "Play A") {
    //     audio.play();
    //     i.value = "Pause A"
    // }
    // else if (i.value == "Pause A") {
    //     audio.pause();
    //     i.value = "Play A";
    // }   

    // console.log(audio.play());
    // console.log(document.querySelector(".playBtn").getAttribute("id"));
