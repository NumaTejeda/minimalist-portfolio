const message = `ALERTA. Será redireccionado a una app VERCEL que google reconoce como pishing, miré el codigo en github y vera que no quiero saber su contrasña.`

function warning(event){
    event.preventDefault()
    const response = confirm(message);
    if(response) return  window.open("https://my-user-managment.vercel.app/login.html", "_blank");
    return window.location.reload();
}