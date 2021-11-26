
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
document.getElementById('nombreDMascota1').innerHTML = dat2;
document.getElementById('nombreDMascota2').innerHTML = dat2;

//Calculadora
if(dat1 == 'selectPerro1'){
    console.log("Perro");
    Perro();
}else if(dat1 == 'selectGato1'){
    console.log("Gato");

}
function Perro() {
    //Condiciones a tommar en cuenta para el calculo
    if(dat7 == 'sexoF'){

    }
    if(dat8 == 'esterS'){

    }
    if(dat9 == 'pocaA'){

    }
    if(dat9 == 'muchaA'){

    }
    //Raza pequeña 
    var gtokg = dat6*1000;
    if(dat3 == 'razaP'){
        if(dat4 == 0 && dat5 <= 11){//Cachorro
            var alimento = (gtokg*1.3)/100;
            document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
            var megajoul = 0.38*gtokg;
            document.getElementsByClassName('kcalpordia')[0].innerHTML = megajoul.toFixed(0);
            console.log("Raza pequeña Cachorro");
        } else if(dat4 > 0 && dat5 >= 0){//Adulto
            var alimento = (gtokg*2)/100;
            document.getElementsByClassName('grpordia')[0].innerHTML = alimento;
            var gtokg = dat6*1000;
            var megajoul = 0.48*gtokg;
            document.getElementsByClassName('kcalpordia')[0].innerHTML = megajoul.toFixed(0);
            console.log("Raza pequeña Adulto");
        }
    }
    //Raza mediana
    if(dat3 == 'razaM'){
            if(dat4 <= 1 && dat5 <= 11){//Cachorro
                var alimento = (gtokg*1.6)/100;
                document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
                var gtokg = dat6*1000;
                var megajoul = 0.40*gtokg;
                document.getElementsByClassName('kcalpordia')[0].innerHTML = megajoul.toFixed(0);
                console.log("Raza mediana Cachorro");
            }else if(dat4 > 1 && dat5 >= 0){//Adulto
                var alimento = (gtokg*2.3)/100;
                document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
                var gtokg = dat6*1000;
                var megajoul = 0.50*gtokg;
                document.getElementsByClassName('kcalpordia')[0].innerHTML = megajoul.toFixed(0);
                console.log("Raza mediana Adulto");
            }
    } 
    //Raza Grande
    if(dat3 == 'razaG'){
        if(dat4 <= 2 && dat5 >= 0){//Cachorro
            var alimento = (gtokg*1.8)/100;
            document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
            var gtokg = dat6*1000;
            var megajoul = 0.45*gtokg;
            document.getElementsByClassName('kcalpordia')[0].innerHTML = megajoul.toFixed(0);
            console.log("Raza grande Cachorro");
        } else if(dat4 > 2 && dat5 >= 0){//Adulto
            var alimento = (gtokg*2.5)/100;
            document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
            var gtokg = dat6*1000;
            var megajoul = 0.52*gtokg;
            document.getElementsByClassName('kcalpordia')[0].innerHTML = megajoul.toFixed(0);
            console.log("Raza grande Adulto");
        }
    }
}

    console.log(dat1,dat2,dat3,dat4,dat5,dat6,dat7,dat8,dat9,dat10);
}
