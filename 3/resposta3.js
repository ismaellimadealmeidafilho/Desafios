// 3. Write a JavaScript program to get the current date.  Go to the editor
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
// Click me to see the solution
function retornaData(){
    var data = new Date;
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    var dataCompleta = `${dia}/${mes}/${ano}`
    console.log(dataCompleta);
}
retornaData()