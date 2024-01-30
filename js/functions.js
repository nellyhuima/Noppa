function heitaNoppaa() {
        var noppa = document.getElementById("noppa");
        var heittoTulos = Math.floor(Math.random() * 6) + 1;

        noppa.src = "./kuvat/" + heittoTulos + ".png";
}