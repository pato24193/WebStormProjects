function randomPos() {
    let btnNo = document.getElementById("btnNo");
    btnNo.style.position = "absolute";

    let btnNoTop = btnNo.style.top;
    let btnNoLeft = btnNo.style.left;
    let btnNoTopNew = 0;
    let btnNoLeftNew = 0;
    
    do {
        btnNoTopNew = Math.random() * window.innerHeight;
        btnNoLeftNew = Math.random() * window.innerWidth;
    } while (btnNoTopNew === btnNoTop || btnNoLeftNew === btnNoLeft);

    btnNo.style.top = btnNoTopNew + "px";
    btnNo.style.left = btnNoLeftNew + "px";
}