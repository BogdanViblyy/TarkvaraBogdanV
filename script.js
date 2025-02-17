document.getElementById("muudaVarvi").addEventListener("click", function() {
    // Kirjuta siia kood, mis muudab taustavärvi juhuslikuks värviks
    const randomvarv = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomvarv;
    //Loeb, mitu korda on tausta muutmise nuppu vajutatud.
    let klikid = document.getElementById("klikid");
    klikid.textContent = parseInt(klikid.textContent) + 1;
});
//Pealkirja muutmine
document.getElementById("muudaPealkiri").addEventListener("click", function() {
    let uusPealkiri = document.getElementById("uusPealkiri").value;
    if (uusPealkiri.trim() !== "") {
        document.getElementById("pealkiri").textContent = uusPealkiri;
    }
});
// Pealkirja varjamine ja näitamine
document.getElementById("peidaPealkiri").addEventListener("click", function() {
    let pealkiri = document.getElementById("pealkiri");
    if (pealkiri.style.display === "none") {
        pealkiri.style.display = "block";
        this.textContent = "Peida pealkiri";
    } else {
        pealkiri.style.display = "none";
        this.textContent = "Näita pealkiri";
    }
});
function getRandomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}
document.getElementById("muudaTekstiVarvi").addEventListener("click", function() {
        document.getElementById("pealkiri").style.color = getRandomColor();
});