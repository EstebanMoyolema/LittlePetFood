//Seleccione la mascota
window.onload = function () {
    var test = document.querySelectorAll(".A2");
    for (var i = 0; i < test.length; i++) {
        test[i].addEventListener("click", function () {
            let activarG = document.getElementsByClassName("normalG")[0];
            let activarP = document.getElementsByClassName("normalP")[0];
            //Solo selecciona una opcion
            if (this.id == "selectGato1" || this.id == "selectPerro1") {
                activarG.className = "A2 button";
                activarP.className = "A2 button";
            }
            //Solo selecciona una opcion
            if (this.id == "selectGato1") {
                activarG.className = "A2 active";
            }
            if (this.id == "selectPerro1") {
                activarP.className = "A2 active";
            }
        });
    }
};
//Nombre de la mascota
var nombreMascota = document.getElementById("namePet").value;
//Sleccionar raza
let raza = document.querySelectorAll(".A3");
for (var a = 0; a < raza.length; a++) {
    raza[a].addEventListener("click", function () {
        let razaP = document.getElementsByClassName("razaP")[0];
        let razaM = document.getElementsByClassName("razaM")[0];
        let razaG = document.getElementsByClassName("razaG")[0];
        //solo selecciona una opcion
        if (this.id == "razaP" || this.id == "razaM" || this.id == "razaG") {
            razaP.className = "A3 button";
            razaM.className = "A3 button";
            razaG.className = "A3 button";
        }
        //solo selecciona una opcion
        if (this.id == "razaP") {
            razaP.className = "A3 active";
        }
        if (this.id == "razaM") {
            razaM.className = "A3 active";
        }
        if (this.id == "razaG") {
            razaG.className = "A3 active";
        }
    });
}
//Edad
let yearM = document.getElementById("years").value;
let monthM = document.getElementById("month").value;
//Sexo mascota
let sexo = document.querySelectorAll(".A4");
for (var b = 0; b < sexo.length; b++) {
    sexo[b].addEventListener("click", function () {
        let sexoM = document.getElementsByClassName("sexoM")[0];
        let sexoF = document.getElementsByClassName("sexoF")[0];
        //solo selecciona una opcion
        if (this.id == "sexoM" || this.id == "sexoF") {
            sexoM.className = "A4 button";
            sexoF.className = "A4 button";
        }
        //solo selecciona una opcion
        if (this.id == "sexoM") {
            sexoM.className = "A4 active";
        }
        if (this.id == "sexoF") {
            sexoF.className = "A4 active";
        }
    });
}
//Esterilizado
let esterilizado = document.querySelectorAll(".A5");
for (var b = 0; b < esterilizado.length; b++) {
    esterilizado[b].addEventListener("click", function () {
        let esterS = document.getElementsByClassName("esterS")[0];
        let esterN = document.getElementsByClassName("esterN")[0];
        //solo selecciona una opcion
        if (this.id == "esterS" || this.id == "esterN") {
            esterS.className = "A5 button";
            esterN.className = "A5 button";
        }
        //solo selecciona una opcion
        if (this.id == "esterS") {
            esterS.className = "A5 active";
        }
        if (this.id == "esterN") {
            esterN.className = "A5 active";
        }
    });
}
//Actividad fisica
let actividadF = document.querySelectorAll(".A6");
for (var c = 0; c < actividadF.length; c++) {
    actividadF[c].addEventListener("click", function () {
        let pocaA = document.getElementsByClassName("pocaA")[0];
        let normalA = document.getElementsByClassName("normalA")[0];
        let muchaA = document.getElementsByClassName("muchaA")[0];
        //solo selecciona una opcion
        if (this.id == "pocaA" || this.id == "normalA" || this.id == "muchaA") {
            pocaA.className = "A6 button";
            normalA.className = "A6 button";
            muchaA.className = "A6 button";
        }
        //solo selecciona una opcion
        if (this.id == "pocaA") {
            pocaA.className = "A6 active";
        }
        if (this.id == "normalA") {
            normalA.className = "A6 active";
        }
        if (this.id == "muchaA") {
            muchaA.className = "A6 active";
        }
    });
}
//complexion del cuerpo
let complexionC = document.querySelectorAll(".A7");
for (var e = 0; e < complexionC.length; e++) {
    complexionC[e].addEventListener("click", function () {
        let delgado = document.getElementsByClassName("delgado")[0];
        let normal = document.getElementsByClassName("normal")[0];
        let sobreP = document.getElementsByClassName("sobreP")[0];
        //solo selecciona una opcion
        if (this.id == "delgado" || this.id == "normal" || this.id == "sobreP") {
            delgado.className = "A7 button";
            normal.className = "A7 button";
            sobreP.className = "A7 button";
        }
        //solo selecciona una opcion
        if (this.id == "delgado") {
            delgado.className = "A7 active";
        }
        if (this.id == "normal") {
            normal.className = "A7 active";
        }
        if (this.id == "sobreP") {
            sobreP.className = "A7 active";
        }
    });
}
//Problemas de salud
let problemSalud = document.querySelectorAll(".A8");
for (var p = 0; p < problemSalud.length; p++) {
    problemSalud[p].addEventListener("click", function () {
        let celiaquia = document.getElementsByClassName("celiaquia")[0];
        let rinion = document.getElementsByClassName("rinion")[0];
        let estruvita = document.getElementsByClassName("estruvita")[0];
        let pancreatitis = document.getElementsByClassName("pancreatitis")[0];
        let diabetes = document.getElementsByClassName("diabetes")[0];
        let cancer = document.getElementsByClassName("cancer")[0];
        if (this.id == "celiaquia") {
            celiaquia.className = "A8 active";
        }
        if (this.id == "rinion") {
            rinion.className = "A8 active";
        }
        if (this.id == "estruvita") {
            estruvita.className = "A8 active";
        }
        if (this.id == "pancreatitis") {
            pancreatitis.className = "A8 active";
        }
        if (this.id == "diabetes") {
            diabetes.className = "A8 active";
        }
        if (this.id == "cancer") {
            cancer.className = "A8 active";
        }
    });
}
//Validar Peso en 1.Kg
function stateHandle() {
    let disable = document.getElementsByClassName("hidden")[0];
    let input = document.querySelector(".input1");
    input.addEventListener("change", stateHandle);
    if (document.querySelector(".input1").value < 1.5) {
        disable.className = "alert alert-danger";
    } else {
        disable.className = "hidden";
    }
}