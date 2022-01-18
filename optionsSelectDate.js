
var c = document.getElementById("SelectCurso");
var d = document.getElementById("FechaCurso");
var arrayC1 = [];
var arrayC2 = ["25, 26, 27 de Febrero y 4, 5, 6 de Marzo de 2022","6, 7, 8 y 13, 14, 15 de Mayo de 2022","2, 3, 4, y 9, 10, 11 de Septiembre de 2022","2, 3, 4 y 9, 10, 11 de Diciembre de 2022."];

crearArrayFechas();

c.addEventListener('change', function(){
    if(c.value == "c1"){
        clearSelects("selectC2");
        crearFechas(arrayC1, true);
    }else if(c.value == "c2"){
        clearSelects("selectC1");
        crearFechas(arrayC2, false);
    }
}, false);



function crearFechas(array, curso){

    var myDiv = document.getElementById("divFechas");


    //Create and append select list
    var selectList = document.createElement("select");
    if (curso == true){
        selectList.setAttribute("id", "selectC1");
    }else{
        selectList.setAttribute("id", "selectC2");
    }
    
    myDiv.appendChild(selectList);

    //Create and append the options
    for (var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", array[i]);
        option.text = array[i];
        selectList.appendChild(option);
    }


}

function clearSelects(id){
    let x = document.getElementById(id);

    if(x){
        x.remove();
    }
}

function crearArrayFechas(){
    const hoy = new Date();
    const d1 = new Date("4/3/2022");
    const d2 = new Date("22/4/2022");
    const d3 = new Date("3/6/2022");
    const d4 = new Date("29/7/2022");
    const d5 = new Date("28/10/2022");

    if (hoy < d1){
        arrayC1.push("4, 5, 6 y 11, 12, 13 de Marzo");
    }
    if (hoy < d2){
        arrayC1.push("22, 23, 24 y 29, 30 de Abril y 1 de Mayo");
    }
    if (hoy < d3){
        arrayC1.push("3, 4, 5 y 10, 11, 12 de Junio");
    }
    if (hoy < d4){
        arrayC1.push("29, 30, 31 de Julio y 5, 6, 7 de Agosto");
    }
    if (hoy < d5){
        arrayC1.push("28, 29, 30 de Octubre y 4, 5, 6 de Noviembre");
    }

    
    // arrayC1.push("4, 5, 6 y 11, 12, 13 de Marzo de 2022.","22, 23, 24 y 29, 30 de Abril y 1 de Mayo de 2022","3, 4, 5 y 10,11,12 de Junio de 2022","29, 30, 31 de Julio y 5, 6, 7 de Agosto de 2022","28, 29, 30 de Octubre y 4, 5, 6 de Noviembre de 2022.");
    
}
