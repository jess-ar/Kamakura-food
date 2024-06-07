function displayAlert(){
    const container = document.querySelector('.container')
    const alert = document.createElement('dialog')
    alert.classList.add('alert')
    alert.innerHTML = ` 
        <button class="close-button" id="close-alert"><img src="./assets/img/close.svg" alt="close"></button>
        <h3>Gracias por tu Compra</h3>
        <p>¡Pedido realizado con éxito gracias por comprar en Kamakura Food!</p>
        <img class="image-logo" src="./assets/img/logo.svg" alt="restaurant logo">

    `
    container.appendChild(alert)
    alert.showModal()
    closeAlert(alert)
    
}

function closeAlert(alert){
    const closeAlertButton = document.querySelector('#close-alert')
if(closeAlertButton){
    closeAlertButton.addEventListener('click',() => {
        alert.close()
    })
}
}
export {displayAlert}