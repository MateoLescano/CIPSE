
var c = document.getElementById("SelectCurso");
var d = document.getElementById("FechaCurso");
var arrayC1 = ["4, 5, 6 y 11, 12, 13 de Marzo","22, 23, 24 y 29, 30 de Abril y 1 de Mayo","3, 4, 5 y 10, 11, 12 de Junio","29, 30, 31 de Julio y 5, 6, 7 de Agosto","28, 29, 30 de Octubre y 4, 5, 6 de Noviembre"];
var arrayC2 = ["25, 26, 27 de Febrero y 4, 5, 6 de Marzo","6, 7, 8 y 13, 14, 15 de Mayo","2, 3, 4, y 9, 10, 11 de Septiembre","2, 3, 4 y 9, 10, 11 de Diciembre"];


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