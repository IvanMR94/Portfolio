let menuVisible = false;
// Funcion que muestra o esconde el menu.
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    };
};

function seleccionar(){
   //oculto el menu una vez que seleccione una opcion.
   document.getElementById("nav").classList ="";
   menuVisible = false;
};





//Funcion que aplica las animaciones a las habilidades.
function efectoHabilidades(){
  var skills = document.getElementById("skills");
  var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if(distancia_skills >= 300){
      let habilidades = document.getElementsByClassName("progreso");
      //Technical skills.
      habilidades[0].classList.add("javascript");
      habilidades[1].classList.add("java");
      habilidades[2].classList.add("htmlcss");
      habilidades[3].classList.add("python");
      habilidades[4].classList.add("wordpress");
      habilidades[5].classList.add("mysql");
      habilidades[6].classList.add("gitgithub");
      habilidades[7].classList.add("boostrap");
      //Professional Skills.
      habilidades[8].classList.add("comunicacion");
      habilidades[9].classList.add("trabajoequipo");
      habilidades[10].classList.add("creatividad");
      habilidades[11].classList.add("dedicacion");
      habilidades[12].classList.add("actitudpositiva");
      habilidades[13].classList.add("apc");
      habilidades[14].classList.add("adaptabilidad");
      habilidades[15].classList.add("integridad");
      
  }
};

//detecto el scrolling para aplicar la animacion de la barra de habilidades.
window.onscroll = function(){
  efectoHabilidades();
};





// Boostrap.
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to.
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission.
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
})()


