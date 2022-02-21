
var c = document.getElementById("SelectCurso");
var d = document.getElementById("FechaCurso");
var arrayC1 = [];
var arrayC2 = [];

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
    const d2 = new Date("4/22/2022");
    const d3 = new Date("6/3/2022");
    const d4 = new Date("7/29/2022");
    const d5 = new Date("10/28/2022");

    const e1 = new Date("2/25/2022");
    const e2 = new Date("5/6/2022");
    const e3 = new Date("9/2/2022");
    const e4 = new Date("12/2/2022");

    //EMDR PARTE 1
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

    //EMDR PARTE 2
    if (hoy < e2){
        arrayC2.push("6, 7, 8 y 13, 14, 15 de Mayo");
    }
    if (hoy < e3){
        arrayC2.push("2, 3, 4, y 9, 10, 11 de Septiembre");
    }
    if (hoy < e4){
        arrayC2.push("2, 3, 4 y 9, 10, 11 de Diciembre");
    }
}
