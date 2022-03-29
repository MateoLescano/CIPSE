n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();



if(m<10){
    hoy = n + '-0' + m + '-' + d
    console.log(hoy)
}else{
    hoy = n + '-' + m + '-' + d
}

console.log(hoy)

var d2 = Date.parse("2022-01-05")

// document.getElementById("mes").setAttribute("min", today);

// function dateCompare(d2){
//     const date1 = new Date();
//     const date2 = new Date(d2);

//     if(date1 > date2){
//         console.log(`hoy is greater than ${d2}`)
//     } else if(date1 < date2){
//         console.log(`${d2} is greater than hoy`)
//     } else{
//         console.log(`Both dates are equal`)
//     }
// }

// dateCompare("7/8/2023")