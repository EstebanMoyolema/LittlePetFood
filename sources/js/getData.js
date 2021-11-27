function val() {
    //Perro o gato
    var dat1 = document.getElementsByClassName("A2 active")[0].id;
    //Nombre mascota
    var dat2 = document.getElementById("namePet").value;
    //Raza de la mascota
    var dat3 = document.getElementsByClassName("A3 active")[0].id;
    //Años de la mascota
    var dat4 = document.getElementById("years").value;
    //Meses de la mascota
    var dat5 = document.getElementById("month").value;
    //Peso de la mascota
    var dat6 = document.getElementsByClassName("input1")[0].value;
    //Sexo de la mascota
    var dat7 = document.getElementsByClassName("A4 active")[0].id;
    //Esterilizado
    var dat8 = document.getElementsByClassName("A5 active")[0].id;
    //Actividad fisica
    var dat9 = document.getElementsByClassName("A6 active")[0].id;
    //Complexion de su cuerpo
    var dat10 = document.getElementsByClassName("A7 active")[0].id;
    //Pasar nombre de la mascota al modal
    document.getElementById("nombreDMascota1").innerHTML = dat2;
    document.getElementById("nombreDMascota2").innerHTML = dat2;

    //Calculadora
    if (dat1 == "selectPerro1") {
        console.log("Perro");
        Perro();
    } else if (dat1 == "selectGato1") {
        console.log("Gato");
        Gato();
    }

    function Perro() {
        //Raza pequeña
        var gtokg = dat6 * 1000;
        if (dat3 == "razaP") {
            if (dat4 == 0 && dat5 <= 11) {
                //Cachorro
                //Estado Fisico
                if(dat10 == 'delgado'){
                    var alimento = (gtokg * 1.3) / 100 + 100;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento; //Gramos por dia
                } else if (dat10 == 'normal'){
                    var alimento = (gtokg * 1.3) / 100;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento; //Gramos por dia
                } else if (dat10 == 'sobreP'){
                    var alimento = (gtokg * 1.3) / 100 - 50;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento; //Gramos por dia
                }
                //Genero del perro
                if (dat7 == "sexoF") {
                    var megajoul = 0.38 * gtokg;
                    var aumS = megajoul - 150;
                    document.getElementsByClassName("kcalpordia")[0].innerHTML = aumS.toFixed(0);
                } else {
                    var megajoul = 0.38 * gtokg;
                    document.getElementsByClassName("kcalpordia")[0].innerHTML = megajoul.toFixed(0);
                }
                console.log("Raza pequeña Cachorro");
            } else if (dat4 > 0 && dat5 >= 0) {
                //Adulto
                //Estado Fisico
                if(dat10 == 'delgado'){
                    var alimento = (gtokg * 2) / 100 + 120;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento; //Gramos por dia
                } else if (dat10 == 'normal'){
                    var alimento = (gtokg * 2) / 100;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento; //Gramos por dia
                } else if (dat10 == 'sobreP'){
                    var alimento = (gtokg * 2) / 100 - 80;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento; //Gramos por dia
                }
                //Genero del perro
                if (dat7 == "sexoF") {
                    var megajoul = 0.48 * gtokg;
                    var aumS = megajoul - 250;
                    document.getElementsByClassName("kcalpordia")[0].innerHTML = aumS.toFixed(0);
                } else {
                    var megajoul = 0.48 * gtokg;
                    document.getElementsByClassName("kcalpordia")[0].innerHTML = megajoul.toFixed(0);
                }
                console.log("Raza pequeña Adulto");
            }
        }
        //Raza mediana
        if (dat3 == "razaM") {
            if (dat4 <= 1 && dat5 <= 11) {
                //Cachorro
                //Estado Fisico
                if(dat10 == 'delgado'){
                    var alimento = (gtokg * 1.6) / 100 + 130;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
                } else if (dat10 == 'normal'){
                    var alimento = (gtokg * 1.6) / 100;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
                } else if (dat10 == 'sobreP'){
                    var alimento = (gtokg * 1.6) / 100 - 50;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
                }
                //Genero del perro
                if (dat7 == "sexoF") {
                    var gtokg = dat6 * 100 - 250;
                    var megajoul = 0.4 * gtokg;
                    document.getElementsByClassName("kcalpordia")[0].innerHTML = megajoul.toFixed(0);
                } else {
                    var gtokg = dat6 * 100;
                    var megajoul = 0.4 * gtokg;
                    document.getElementsByClassName("kcalpordia")[0].innerHTML = megajoul.toFixed(0);
                }
                console.log("Raza mediana Cachorro");
            } else if (dat4 > 1 && dat5 >= 0) {
                //Adulto
                //Estado Fisico
                if(dat10 == 'delgado'){
                    var alimento = (gtokg * 2.3) / 100 + 100;
                document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
                } else if (dat10 == 'normal'){
                    var alimento = (gtokg * 2.3) / 100;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
                } else if (dat10 == 'sobreP'){
                    var alimento = (gtokg * 2.3) / 100 - 50;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
                }
                //Genero del perro
                if (dat7 == "sexoF") {
                    var gtokg = dat6 * 100 - 350;
                    var megajoul = 0.5 * gtokg;
                    document.getElementsByClassName("kcalpordia")[0].innerHTML = megajoul.toFixed(0);
                } else {
                    var gtokg = dat6 * 100;
                    var megajoul = 0.5 * gtokg;
                    document.getElementsByClassName("kcalpordia")[0].innerHTML = megajoul.toFixed(0);
                }
                console.log("Raza mediana Adulto");
            }
        }
        //Raza Grande
        if (dat3 == "razaG") {
            if (dat4 <= 2 && dat5 >= 0) {
                //Cachorro
                //Estado Fisico
                if(dat10 == 'delgado'){
                    var alimento = (gtokg * 1.8) / 100 + 200;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
                } else if (dat10 == 'normal'){
                    var alimento = (gtokg * 1.8) / 100;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
                } else if (dat10 == 'sobreP'){
                    var alimento = (gtokg * 1.8) / 100 - 100;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
                }
                //Genero del perro
                if (dat7 == "sexoF") {
                    var gtokg = dat6 * 100 - 380;
                    var megajoul = 0.45 * gtokg;
                    document.getElementsByClassName("kcalpordia")[0].innerHTML = megajoul.toFixed(0);
                } else {    
                    var gtokg = dat6 * 100;
                var megajoul = 0.45 * gtokg;
                document.getElementsByClassName("kcalpordia")[0].innerHTML = megajoul.toFixed(0);
                }
                
                console.log("Raza grande Cachorro");
            } else if (dat4 > 2 && dat5 >= 0) {
                //Adulto
                //Estado Fisico
                if(dat10 == 'delgado'){
                    var alimento = (gtokg * 2.5) / 100 + 230;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
                } else if (dat10 == 'normal'){
                    var alimento = (gtokg * 2.5) / 100;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
                } else if (dat10 == 'sobreP'){
                    var alimento = (gtokg * 2.5) / 100 - 50;
                document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
                }
                //Genero del perros
                if (dat7 == "sexoF") {
                    var gtokg = dat6 * 100 - 40;
                    var megajoul = 0.52 * gtokg;
                    document.getElementsByClassName("kcalpordia")[0].innerHTML = megajoul.toFixed(0);
                } else {
                    var gtokg = dat6 * 100;
                    var megajoul = 0.52 * gtokg;
                    document.getElementsByClassName("kcalpordia")[0].innerHTML = megajoul.toFixed(0);
                }
                console.log("Raza grande Adulto");
            }
        }
    }
    //Gato
    function Gato() {
        //Raza pequeña
        var gtokg = dat6 * 1000;
        if (dat3 == "razaP") {
            if (dat4 == 0 && dat5 <= 11) {
                //Cachorro
                //Estado Fisico
                if(dat10 == 'delgado'){
                    var alimento = (gtokg * 1.3) / 100 + 100;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento; //Gramos por dia
                } else if (dat10 == 'normal'){
                    var alimento = (gtokg * 1.3) / 100;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento; //Gramos por dia
                } else if (dat10 == 'sobreP'){
                    var alimento = (gtokg * 1.3) / 100 - 50;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento; //Gramos por dia
                }
                //Genero del perro
                if (dat7 == "sexoF") {
                    var megajoul = 0.38 * gtokg;
                    var aumS = megajoul - 150;
                    document.getElementsByClassName("kcalpordia")[0].innerHTML = aumS.toFixed(0);
                } else {
                    var megajoul = 0.38 * gtokg;
                    document.getElementsByClassName("kcalpordia")[0].innerHTML = megajoul.toFixed(0);
                }
                console.log("Raza pequeña Cachorro");
            } else if (dat4 > 0 && dat5 >= 0) {
                //Adulto
                //Estado Fisico
                if(dat10 == 'delgado'){
                    var alimento = (gtokg * 2) / 100 + 120;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento; //Gramos por dia
                } else if (dat10 == 'normal'){
                    var alimento = (gtokg * 2) / 100;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento; //Gramos por dia
                } else if (dat10 == 'sobreP'){
                    var alimento = (gtokg * 2) / 100 - 80;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento; //Gramos por dia
                }
                //Genero del perro
                if (dat7 == "sexoF") {
                    var megajoul = 0.48 * gtokg;
                    var aumS = megajoul - 250;
                    document.getElementsByClassName("kcalpordia")[0].innerHTML = aumS.toFixed(0);
                } else {
                    var megajoul = 0.48 * gtokg;
                    document.getElementsByClassName("kcalpordia")[0].innerHTML = megajoul.toFixed(0);
                }
                console.log("Raza pequeña Adulto");
            }
        }
        //Raza mediana
        if (dat3 == "razaM") {
            if (dat4 <= 1 && dat5 <= 11) {
                //Cachorro
                //Estado Fisico
                if(dat10 == 'delgado'){
                    var alimento = (gtokg * 1.6) / 100 + 130;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
                } else if (dat10 == 'normal'){
                    var alimento = (gtokg * 1.6) / 100;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
                } else if (dat10 == 'sobreP'){
                    var alimento = (gtokg * 1.6) / 100 - 50;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
                }
                //Genero del perro
                if (dat7 == "sexoF") {
                    var gtokg = dat6 * 100 - 250;
                    var megajoul = 0.4 * gtokg;
                    document.getElementsByClassName("kcalpordia")[0].innerHTML = megajoul.toFixed(0);
                } else {
                    var gtokg = dat6 * 100;
                    var megajoul = 0.4 * gtokg;
                    document.getElementsByClassName("kcalpordia")[0].innerHTML = megajoul.toFixed(0);
                }
                console.log("Raza mediana Cachorro");
            } else if (dat4 > 1 && dat5 >= 0) {
                //Adulto
                //Estado Fisico
                if(dat10 == 'delgado'){
                    var alimento = (gtokg * 2.3) / 100 + 100;
                document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
                } else if (dat10 == 'normal'){
                    var alimento = (gtokg * 2.3) / 100;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
                } else if (dat10 == 'sobreP'){
                    var alimento = (gtokg * 2.3) / 100 - 50;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
                }
                //Genero del perro
                if (dat7 == "sexoF") {
                    var gtokg = dat6 * 100 - 350;
                    var megajoul = 0.5 * gtokg;
                    document.getElementsByClassName("kcalpordia")[0].innerHTML = megajoul.toFixed(0);
                } else {
                    var gtokg = dat6 * 100;
                    var megajoul = 0.5 * gtokg;
                    document.getElementsByClassName("kcalpordia")[0].innerHTML = megajoul.toFixed(0);
                }
                console.log("Raza mediana Adulto");
            }
        }
        //Raza Grande
        if (dat3 == "razaG") {
            if (dat4 <= 2 && dat5 >= 0) {
                //Cachorro
                //Estado Fisico
                if(dat10 == 'delgado'){
                    var alimento = (gtokg * 1.8) / 100 + 200;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
                } else if (dat10 == 'normal'){
                    var alimento = (gtokg * 1.8) / 100;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
                } else if (dat10 == 'sobreP'){
                    var alimento = (gtokg * 1.8) / 100 - 100;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
                }
                //Genero del perro
                if (dat7 == "sexoF") {
                    var gtokg = dat6 * 100 - 380;
                    var megajoul = 0.45 * gtokg;
                    document.getElementsByClassName("kcalpordia")[0].innerHTML = megajoul.toFixed(0);
                } else {    
                    var gtokg = dat6 * 100;
                var megajoul = 0.45 * gtokg;
                document.getElementsByClassName("kcalpordia")[0].innerHTML = megajoul.toFixed(0);
                }
                
                console.log("Raza grande Cachorro");
            } else if (dat4 > 2 && dat5 >= 0) {
                //Adulto
                //Estado Fisico
                if(dat10 == 'delgado'){
                    var alimento = (gtokg * 2.5) / 100 + 230;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
                } else if (dat10 == 'normal'){
                    var alimento = (gtokg * 2.5) / 100;
                    document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
                } else if (dat10 == 'sobreP'){
                    var alimento = (gtokg * 2.5) / 100 - 50;
                document.getElementsByClassName("grpordia")[0].innerHTML = alimento;
                }
                //Genero del perros
                if (dat7 == "sexoF") {
                    var gtokg = dat6 * 100 - 40;
                    var megajoul = 0.52 * gtokg;
                    document.getElementsByClassName("kcalpordia")[0].innerHTML = megajoul.toFixed(0);
                } else {
                    var gtokg = dat6 * 100;
                    var megajoul = 0.52 * gtokg;
                    document.getElementsByClassName("kcalpordia")[0].innerHTML = megajoul.toFixed(0);
                }
                console.log("Raza grande Adulto");
            }
        }
    }
    console.log(dat1, dat2, dat3, dat4, dat5, dat6, dat7, dat8, dat9, dat10);
}