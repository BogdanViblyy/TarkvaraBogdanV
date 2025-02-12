document.getElementById("muudaVarvi").addEventListener("click", function() {
    // Kirjuta siia kood, mis muudab taustavärvi juhuslikuks värviks
    const randomvarv = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomvarv;
});
