function handleModal(){
    const button = document.querySelector("#insert_value")
    const modalController = document.querySelector("#modal__controller")
    button.addEventListener("click", ()=>{
        modalController.showModal()
    })
    
}

function closeModal(){
    const button = document.querySelector("#closeModal")
    const modalController = document.querySelector("#modal__controller")
    button.addEventListener("click", ()=>{
        modalController.close()
    })
}
handleModal()
closeModal()
