document.getElementById("muudaVarvi").addEventListener("click", function() {
    // Kirjuta siia kood, mis muudab taustavärvi juhuslikuks värviks
    const randomvarv = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomvarv;
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
