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

    //fechar modal pelo botão
    modal.onclick = function(){
    modal.style.display = 'none'
    }
})