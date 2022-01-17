n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();


if(m<10){
    today = '2022-0'+m
}else{
    today = '2022-'+m
}

document.getElementById("mes").setAttribute("min", today);