let modalsBttn = document.querySelectorAll('.modalBtn')

// Adiciona eventos de clique para cada modal
modalsBttn.forEach(function(button){
    let idModal = button.getAttribute('data-modal')
    let modal = document.getElementById(idModal)

    if(idModal && modal){
        button.addEventListener('click', function(){
            modal.style.display = 'block'
            modal.focus()
        })
    }

    //Fecha o modal apenas pelo o botão.
    let closeBtn = modal.querySelector('.closeBttn')
    closeBtn.addEventListener('click', function(){
        modal.style.display = 'none'
    })
})