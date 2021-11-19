
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

//Calculadora
var Kgtog=0;
//Cachorro
//--Raza Pequeña--
if(dat3 == 'razaP'){
    if(dat5 < 9 &&  dat4 == 0){
        var Kgtog = dat6*1000;
        var alimento = (Kgtog*1.3)/100;
        document.getElementById('grpordia').value = alimento;
        var megajoul = 0.38*dat6;
        var kcal = (megajoul*239.1);
        document.getElementById('kcalpordia').value = kcal.toFixed(0);
    }
}
//--Raza Mediana--
if(dat3 == 'razaM'){
    if(dat5 < 6 &&  dat4 == 1){
        var Kgtog = dat6*1000;
        var alimento = (Kgtog*1.6)/100;
        document.getElementById('grpordia').value = alimento;
        var megajoul = 0.40*dat6;
        var kcal = (megajoul*239.1);
        document.getElementById('kcalpordia').value = kcal.toFixed(0);
    }
}
//--Raza Grande--
if(dat3 == 'razaG'){
    if(dat4 <= 2){
        var KgtoG = dat6*1000;
        var alimento = (KgtoG*1.8)/100;
        document.getElementById('grpordia').value = alimento;
        var megajoul = 0.45*dat6;
        var kcal = (megajoul*239.1);
        document.getElementById('kcalpordia').value = kcal.toFixed(0);
    }
}
//Adulto
//--Raza Pequeña--
if(dat3 == 'razaP'){
    if(dat5 >= 9 ||  dat4 > 0){
        var KgtoG = dat6*1000;
        var alimento = (KgtoG*2)/100;
        document.getElementById('grpordia').value = alimento;
        var megajoul = 0.48*dat6;
        var kcal = (megajoul*239.1);
        document.getElementById('kcalpordia').value = kcal.toFixed(0);
    }
}
//--Raza Mediana--
if(dat3 == 'razaM'){
    if(dat5 >= 6 &&  dat4 >= 1){
        var KgtoG = dat6*1000;
        var alimento = (KgtoG*2.3)/100;
        document.getElementById('grpordia').value = alimento;
        var megajoul = 0.50*dat6;
        var kcal = (megajoul*239.1);
        document.getElementById('kcalpordia').value = kcal.toFixed(0);
    }
}
//--Raza Grande--
if(dat3 == 'razaG'){
    if(dat4 > 2){
        var KgtoG = dat6*1000;
        var alimento = (KgtoG*2.5)/100;
        document.getElementById('grpordia').value = alimento;
        var megajoul = 0.52*dat6;
        var kcal = (megajoul*239.1);
        document.getElementById('kcalpordia').value = kcal.toFixed(0);
    }
}
    console.log(dat1,dat2,dat3,dat4,dat5,dat6,dat7,dat8,dat9,dat10);
}
