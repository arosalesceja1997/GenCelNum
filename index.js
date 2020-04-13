let provincias = 
[
    "Amazonas", "Ancash", "Apurimac", "Arequipa", "Ayacucho", "Cajamarca",
    "Cusco", "Huancavelica", "Huanuco", "Ica", "Junín", "La Libertad",
    "Lambayeque", "Loreto", "Madre de Dios", "Moquegua", "Pasco", "Piura",
    "Puno", "San Martín", "Tacna", "Tumbes", "Ucayali"
];

let lada = [
    "41", "43", "83", "54", "66", "76",
    "84", "67", "62", "56", "64", "44",
    "74", "65", "82", "53", "63", "73",
    "51", "51", "52", "72", "61"
];

// Funcion para descargar un archivo en .txt
window.onload = function() {
    document.getElementById('link').onclick = function(code) {
        this.href = 'data:text/plain;charset=utf-8,'
        + encodeURIComponent(txt.value);
    };
};

// Funcion para generar los numeros con una lada aleateoria pero correcta
function celNumbers() {
    let cant = document.getElementById('numero').value;
    var txt = document.getElementById('txt');
    var numeros = [];
    txt.value = "";

    for(let x = 0; x < cant; x++){
        numeros[x] = "9" + lada[aleatorio(22)];
        for(let y = 0; y < 6; y++){
            numeros[x] += "" + aleatorio(9);
        }
        txt.value += numeros[x] + "\n";
    }
}


function aleatorio(rang){
    var numPosibilidades = rang;
    var aleat = Math.random() * numPosibilidades;
    aleat = Math.round(aleat);
    return parseInt(0) + aleat;
}

document.addEventListener("DOMContentLoaded", function(event) { 
    var select = document.getElementById("Ladas"); //Seleccionamos el select 23
    for(var i=0; i < provincias.length; i++){ 
        var option = document.createElement("option"); //Creamos la opcion
        option.innerHTML = provincias[i]; //Metemos el texto en la opción
        option.value = lada[i];
        select.appendChild(option); //Metemos la opción en el select
    }
});

function ShowSelected(){
    /* Para obtener el valor */
    var code = document.getElementById("Ladas").value;
    alert(code);
    
    /* Para obtener el texto */
    //var combo = document.getElementById("Ladas");
    // var selected = combo.options[combo.selectedIndex].text;
    // alert(selected);
}

//SOLO NUMEROS
function soloNumeros(e){
	var key = window.Event ? e.which : e.keyCode
	return ((key >= 48 && key <= 57) || (key==8))
}