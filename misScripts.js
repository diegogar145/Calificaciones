let notas = [];
let asignaturas = ["Español", "Matematicas", "Ingles", "Informatica", "Biologia"];

function guardar(){
    notas = [document.getElementById("primeraNota").value, document.getElementById("segundaNota").value, document.getElementById("terceraNota").value, document.getElementById("cuartaNota").value, document.getElementById("quintaNota").value];
}

function mostrarCalificaciones() {
    let lista = document.getElementById("notasSemestre");
    lista.textContent = "";

    for (let x = 0; x < notas.length; x++) {
        let elemento = document.createElement("li");
        elemento.textContent = "Su nota en " + asignaturas[x] + ": "+ notas[x];
        lista.appendChild(elemento);
    }
}

function promedio(){
    let suma =0;
    for(x=0; x<5; x++){
         suma = (suma + +notas[x]);
         resultado = suma/5;        
    }
    document.getElementById("promedioSemestral").textContent = resultado.toFixed(2);

    if(resultado >= 6){
        document.getElementById("mensajeCalificacion").textContent = "Felicitaciones";
    }if(resultado <= 6){
        document.getElementById("mensajeCalificacion2").textContent = "Estudia mas";
    }
}

function notaMasAlta() {
    let mayor = notas[0];
    let materia = asignaturas[0];

    for (let x = 0; x < notas.length; x++) {
        if (notas[x] > mayor) {
            mayor = notas[x];
            materia = asignaturas[x];
        }
    }

    document.getElementById("mejorNota").textContent = "Su mejor nota fue " + materia + ": " +  mayor;
}

function materiasPerdidas(){    
        let lista = document.getElementById("materiasPerdidas");
        lista.textContent = "";

    for (let x = 0; x < notas.length; x++) {

        if(notas[x] < 6){
        let elemento = document.createElement("li");
        elemento.textContent = "Perdiste " + asignaturas[x] + ": "+ notas[x];
        lista.appendChild(elemento);
        }else{
            document.getElementById("pasasteTodo") = "Felicitaciones Pasaste todas las Asignaturas";
        }
    }
    

}