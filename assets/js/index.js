
const WindownsOfProjectsdate = () =>{
    Swal.fire({
        title: 'Portafolio',
        html: '<img src="../assets/img/Captura.PNG" width="400px" height="200px"><p class="alert_p">Portafolio Actual</p> ',
        
      })

}
const WindownsOfProjectsAnime = () =>{
    Swal.fire({
        title: 'AnimeFLV',
        html: '<img src="../assets/img/captura_anime.png" width="450px" height="250px"> <p class="alert_p">Pagina web de anime provisional</p> ',
      })

}
const WindownsOfProjectsColor = () =>{
    Swal.fire({
        title: 'ColorHunt',
        text: 'Modal with a custom image.',
        html: '<img src="../assets/img/captura_colorhunt.png" width="450px" height="250px"> <p class="alert_p">Pagina web provisional que se utiliza para escoger paletas de colores para paginas web</p> ',
      })

}


let btn = document.getElementById('img__pagina__date')
btn.addEventListener("click",WindownsOfProjectsdate)

let btn2 = document.getElementById('img__anime__date')
btn2.addEventListener("click",WindownsOfProjectsAnime)

let btn3 = document.getElementById('img__color__date')
btn3.addEventListener("click",WindownsOfProjectsColor)