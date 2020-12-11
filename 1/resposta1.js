// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Friday.
// Current time is : 4 PM : 50 : 22
var day;
var data = new Date();
var semana = data.getDay();
switch (semana) {
    case 0: 
        day = "Domingo";
        break;
    case 1: 
        day = "Segunda";
        break;
    case 2: 
        day = "Terça";
        break;
    case 3: 
        day = "Quarta";
        break;
    case 4: 
        day = "Quinta";
        break;
    case 5: 
        day = "Sexta";
        break;
    case 6: 
        day = "Sábado";
        break;
}
console.log('Today is : ' + day);

var hora;
var min = data.getMinutes();
var seg = data.getSeconds();

if(data.getHours() < 13){
    hora = data.getHours();
}else{
    hora = (data.getHours() - 12) + ' PM' ;
}

var horaCompleta = 'Current time is : ' + hora + ' : ' + min + ' : ' + seg;


console.log(horaCompleta);