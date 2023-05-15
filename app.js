var audio0 = new Audio("songs/Jai Jai Narayan Narayan Hari Hari (Female) - Hari Darshan 320 Kbps.mp3");
var audio1 = new Audio("songs/Akhiyaan_Milaoon_Kabhi___Raja___Udit_Narayan___Alk.mp3");
var audio2 = new Audio("songs/Main_Deewana_Deewana_Vaada_Song.mp3");
var audio3 = new Audio("songs/Main_Ishq_Uska_Full_Song_Vaada.mp3");
function jai(i) {
    console.log(i);
    // console.log(i.onclick);
    switch (i.value) {
        case "Play A":
            if (playing() == true) {
                audio0.play();
                i.value = "Pause A";
                i.innerHTML = "Pause A";
                break;
            }
            else alert("please pause ongoing music");
        case "Pause A":
            audio0.pause();
            i.value = "Play A";
            audio0.currentTime = 0;
            i.innerHTML = "Play A";
            break;
        case "Play S":
            if (playing() == true) {
                audio1.play();
                i.value = "Pause S";
                i.innerHTML = "Pause S";
                break;
            }
            else alert("please pause ongoing music");
        case "Pause S":
            audio1.pause();
            i.value = "Play S";
            audio1.currentTime = 0;
            i.innerHTML = "Play S";
            break;
        case "Play D":
            if (playing() == true) {
                audio2.play();
                i.value = "Pause D";
                i.innerHTML = "Pause D";
                break;
            }
            else alert("please pause ongoing music");
        case "Pause D":
            audio2.pause();
            i.value = "Play D";
            audio2.currentTime = 0;
            i.innerHTML = "Play D";
            break;
        case "Play F":
            if (playing() == true) {
                audio3.play();
                i.value = "Pause F";
                i.innerHTML = "Pause F";
                break;
            }
            else alert("Please pause ongoing music");
        case "Pause F":
            audio3.pause();
            i.value = "Play F";
            audio3.currentTime = 0;
            i.innerHTML = "Play F";
            break;
    }
    document.getElementById("myText").focus();
}
function playing() {
    var c = document.querySelectorAll("button");
    for (i = 0; i < c.length; i++) {
        var b = c[i].innerHTML.slice(0, 6);
        // console.log(b);
        if (b == "Pause ") {
            return false;
        }
    }
    return true;
}

/*
function jai(){
    audio0.play();             multiple time song chalu rahat hota
}
*/

// if (i.value == "Play A") {
//     audio.play();
//     i.value = "Pause A"
// }
// else if (i.value == "Pause A") {
//     audio.pause();
//     i.value = "Play A";
// }   

//////////////////////////////////////////////////KEY press/////////////////////////////////////////////////////////////
document.addEventListener("keypress", function (g) {
    // console.log(g);
    if (g.key == 'A' || g.key == 'a') {
        if (playing() == true) {
            audio0.play();
            document.querySelector("#a").value = "Pause A";
            document.querySelector("#a").innerHTML = "Pause A";
        }
        else alert("Pause ongoing music");

    }
    else if (g.key == 'S' || g.key == 's') {
        if (playing() == true) {
            audio1.play();
            document.querySelector("#s").value = "Pause S";
            document.querySelector("#s").innerHTML = "Pause S";
        }
        else alert("Pause ongoing music");



    }
    else if (g.key == 'D' || g.key == 'd') {
        if (playing() == true) {
            audio2.play();
            document.querySelector("#d").value = "Pause D";
            document.querySelector("#d").innerHTML = "Pause D";
        }
        else alert("Pause ongoing music");


    }
    else if (g.key == 'F' || g.key == 'f') {
        if (playing() == true) {
            audio3.play();
            document.querySelector("#f").value = "Pause F";
            document.querySelector("#f").innerHTML = "Pause F";
        }
        else alert("Pause ongoing music");

    }

    else if (g.key == ' ') {
        audio0.pause();
        audio0.currentTime = 0;
        audio1.pause();
        audio1.currentTime = 0;
        audio2.pause();
        audio2.currentTime = 0;
        audio3.pause();
        audio3.currentTime = 0;
        var b = document.querySelectorAll("button");
        console.log(b);
        for (let i = 0; i < 4; i++) {
            var c = b[i].value.split(" ");                    //for i=0 c=['Pause','A']; this gives array
            console.log(c);
            var a = c[0];
            if (a == "Pause") {
                b[i].value = "Play " + c[1];
                b[i].innerHTML = "Play " + c[1];
            }
        }
    }
});
function playing() {
    var b = document.querySelectorAll("button");
    for (let i = 0; i < b.length; i++) {
        var c = b[i].innerHTML;
        if (c.slice(0, 5) == "Pause") {
            return false;
        }
    }
    return true;
}
