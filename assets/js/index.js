
const WindownsOfProjectsPortafolio = () =>{
    Swal.fire({
        title: 'Portafolio',
        html: '<a href="#img__presentation"><img src="../assets/img/Portafolio.png" width="450px" height="200px"></a> <p class="alert_p">Portafolio Actual</p> ',
        
      })

}
const WindownsOfProjectsTaskTierList = () =>{
    Swal.fire({
        title: 'TaskTierList',
        html: '<a href="https://brthmnd.github.io/TaskTierList/"><img src="../assets/img/TaskTierlist.png" width="450px" height="200px"></a> <p class="alert_p">Pagina para listar tareas</p>',
      })

}
const WindownsOfProjectsCrud = () =>{
    Swal.fire({
        title: 'ColorHunt',
        text: 'Modal with a custom image.',
        html: '<a href="https://crudbrandon-bvg0.onrender.com/aprendices"><img src="../assets/img/crud.png" width="450px" height="200px"></a> <p class="alert_p">Pagina web que administra aprendices y sus notas</p> ',
      })

}


let btn = document.getElementById('img__pagina__date')
btn.addEventListener("click",WindownsOfProjectsPortafolio)

let btn2 = document.getElementById('img__anime__date')
btn2.addEventListener("click",WindownsOfProjectsTaskTierList)

let btn3 = document.getElementById('img__color__date')
btn3.addEventListener("click",WindownsOfProjectsCrud)