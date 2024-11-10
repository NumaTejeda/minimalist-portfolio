const message = `ALERTA. Será redireccionado a una app VERCEL que google reconoce como pishing, miré el codigo en github y vera que no quiero saber su contraseña.`

function warning(event){
    event.preventDefault()
    const response = confirm(message);
    if(response) return  window.open("https://my-user-managment.vercel.app/login.html", "_blank");
    return window.location.reload();
}


document.addEventListener("DOMContentLoaded", () => {
    const body = document.getElementById('body');
    const button = document.getElementById('button-mode');
    button.addEventListener("click", () => {
        body.classList.toggle('dark-mode');
        body.style.backgroundColor = body.style.backgroundColor === 'rgb(27, 24, 73)' 
        ? '#fff' 
        : 'rgb(27, 24, 73)';
        }
    )    
});


// windows.addEventListener('scroll', ()=>{
//     const flaotingMenu = document.querySelector('#flaoting-menu');
//     flaotingMenu
// })