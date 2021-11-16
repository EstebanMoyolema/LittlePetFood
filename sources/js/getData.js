
function val() {
    //Perro o gato
var dat1 = document.getElementsByClassName('A2 active')[0].id;
//Nombre mascota
var dat2 = document.getElementById('namePet').value;
//Raza de la mascota
var dat3 = document.getElementsByClassName('A3 active')[0].id;
//Años de la mascota
var dat4 = document.getElementById('years').value;
//Meses de la mascota
var dat5 = document.getElementById('month').value;
//Peso de la mascota
var dat6 = document.getElementsByClassName('input1')[0].value;
//Sexo de la mascota
var dat7 = document.getElementsByClassName('A4 active')[0].id;
//Esterilizado
var dat8 = document.getElementsByClassName('A5 active')[0].id;
//Actividad fisica
var dat9 = document.getElementsByClassName('A6 active')[0].id;
//Complexion de su cuerpo
var dat10 = document.getElementsByClassName('A7 active')[0].id;
//Pasar nombre de la mascota al modal 
document.getElementById('nombreResult21').value = dat2;
document.getElementById('nombreResult22').value = dat2;
    console.log(dat1,dat2,dat3,dat4,dat5,dat6,dat7,dat8,dat9,dat10);
}
