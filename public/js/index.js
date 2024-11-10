const message = `ALERTA. Será redireccionado a una app VERCEL que google reconoce como pishing, miré el codigo en github y vera que no quiero saber su contraseña.`

function warning(event) {
    event.preventDefault()
    const response = confirm(message);
    if (response) return window.open("https://my-user-managment.vercel.app/login.html", "_blank");
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

    const floatingMenu = document.getElementById('floating-menu');
    let scrollTimeout;


    window.addEventListener('scroll', () => {
        console.log("Hola")
        floatingMenu.style.opacity = '1';
        floatingMenu.style.visibility = 'visible';
        floatingMenu.style.transitionDuration = '2s'

        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() =>{
            floatingMenu.style.opacity = '0';
            floatingMenu.style.visibility = 'hidden';
        }, 1000)
    })

    floatingMenu.addEventListener('mouseenter', () =>{
        clearTimeout(scrollTimeout)
        floatingMenu.style.opacity = '1';
        floatingMenu.style.visibility = 'visible';
    })
    floatingMenu.addEventListener('mouseleave', () => {
        floatingMenu.style.opacity = '0';
        floatingMenu.style.visibility = 'hidden';
    });
});
