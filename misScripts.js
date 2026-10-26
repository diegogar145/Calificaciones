let notas = [];

function guardar(){
    notas = [document.getElementById("primeraNota").value, document.getElementById("segundaNota").value, document.getElementById("terceraNota").value, document.getElementById("cuartaNota").value, document.getElementById("quintaNota").value];
    document.getElementById("notaGuardada").textContent = notas;
}

function mensaje(){
    document.getElementById("mensaje1").textContent = "Hola";
}

function mostrarCalificaciones(){
    let calificacion = 0;
    for(x=0; x<5 ; x++){
        calificacion = notas[x];
       document.getElementById("notasSemestre").textContent = "Su nota es " + calificacion;
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
        document.getElementById("mensajeCalificacion2").textContent = "Vales monda";
    }
}

function notaMasAlta(){

}

function materiasPerdidas(){

}