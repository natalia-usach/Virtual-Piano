document.addEventListener("keydown", function(event) {
    if (event.code == "KeyA") {
        let keyA = new Audio("audio/A.mp3");
        keyA.play();
    }
    else if (event.code == "KeyS") {
        let keyS = new Audio("audio/S.mp3");
        keyS.play();
    }
    else if (event.code == "KeyD") {
        let keyD = new Audio("audio/D.mp3");
        keyD.play();
    }
    else if (event.code == "KeyF") {
        let keyF = new Audio("audio/F.mp3");
        keyF.play();
    }
    else if (event.code == "KeyG") {
        let keyG = new Audio("audio/G.mp3");
        keyG.play();
    }
    else if (event.code == "KeyH") {
        let keyH = new Audio("audio/H.mp3");
        keyH.play();
    }
    else if (event.code == "KeyJ") {
        let keyJ = new Audio("audio/J.mp3");
        keyJ.play();
    }
    else if (event.code == "KeyW") {
        let keyW = new Audio("audio/W.mp3");
        keyW.play();
    }
    else if (event.code == "KeyE") {
        let keyE = new Audio("audio/E.mp3");
        keyE.play();
    }
    else if (event.code == "KeyT") {
        let keyT = new Audio("audio/T.mp3");
        keyT.play();
    }
    else if (event.code == "KeyY") {
        let keyY = new Audio("audio/Y.mp3");
        keyY.play();
    }
    else if (event.code == "KeyU") {
        let keyU = new Audio("audio/U.mp3");
        keyU.play();
    }
    else {
        console.log("The unbound key is pressed.");
    }
});