const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const email = formData.get('email');
    const getErrorEmail  = document.querySelector('.error-email');
    const inputEmail = document.querySelector('.input-email');
    if(email === ''){
        getErrorEmail.style.display = 'inline';
        inputEmail.classList.toggle('active');
    }else{
        const mainDiv = document.querySelector('.main-div');
        mainDiv.style.display = 'none';
        const successDiv = document.querySelector('.success-message');
        successDiv.classList.toggle('active-success-message');
        successDiv.style.display = 'block';

        const inputEmail = document.querySelector('.input-email');
        const nombreCorreo = inputEmail.value;

        //Insertar el nombreCorreo en el span con id email-value
        const emailValue = document.querySelector('#email-value');
        emailValue.innerHTML = nombreCorreo;
    }
});

// Obtener el boton de dismiss message
const btnDismissMsg = document.querySelector('#dismiss-btn');

// AGREGAR EVENTO AL BTN DE DISMISS
btnDismissMsg.addEventListener('click', () => {
    // Hacer que el div de success-message desaparezca
    const successDiv = document.querySelector('.success-message');
    successDiv.style.display = 'none';
    successDiv.classList.toggle('active-success-message');
    const mainDiv = document.querySelector('.main-div');
    mainDiv.style.display = 'flex';
    const containerMain = document.querySelector('.container');
    containerMain.style.display = 'flex';
});
