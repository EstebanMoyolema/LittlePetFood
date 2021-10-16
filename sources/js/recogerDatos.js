//Seleccione la mascota
window.onload = function () 
{
    var test =document.querySelectorAll('.A2');
    for(var i=0;i<test.length;i++)
    {
        test[i].addEventListener("click", function()
        {
            if(this.id=="selectGato1"){
                let activarG = document.getElementsByClassName("normalG")[0];
                    activarG.className = "A2 active";
            }
            if(this.id=="selectPerro1"){
                let activarP = document.getElementsByClassName("normalP")[0];
                    activarP.className = "A2 active";
            }
        }); 
    }
}
//Nombre de la mascota
let nombreMascota = document.getElementById("namePet").value;
//Sleccionar raza
let raza = document.querySelectorAll('.A3');
for(var a=0;a<raza.length;a++){
    raza[a].addEventListener("click", function(){
        if(this.id=="razaP"){
            let razaP = document.getElementsByClassName("razaP")[0];
                razaP.className = "A3 active";
        }
        if(this.id=="razaM"){
            let razaM = document.getElementsByClassName("razaM")[0];
                razaM.className = "A3 active";
        }
        if(this.id=="razaG"){
            let razaG = document.getElementsByClassName("razaG")[0];
                razaG.className = "A3 active";
        }
    });
}
