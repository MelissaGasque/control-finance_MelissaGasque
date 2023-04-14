// cards já adicionados
function cards(insertedValues){
    insertedValues.forEach(card => {

        const li = document.createElement("li")
        li.classList.add("section_card")
        li.id = card.id
    
        const p2 = document.createElement("p2")
        p2.id = "card_number"
        p2.innerText =`R$ ${card.value.toFixed(2)}`

        const divbox = document.createElement("div")
        divbox.classList.add("div_card-LES")

        const div = document.createElement("div")
       
        const p3 = document.createElement("p3")
        p3.id ="card_entradaSaida"
        p3.innerText = card.categoryID;
        if(card.categoryID === 0){
            p3.innerText = "Entrada"
        }
        if(card.categoryID === 1){
            p3.innerText = "Saída"
        }

        const img = document.createElement("img")
        img.id = "card_button-lixo"
        img.src="src/assets/img/trash.svg"
        img.alt = "lixeira"

        img.addEventListener("click", ()=>{
            const divBox = img.parentElement
            const limpar = divBox.parentElement
            limpar.remove()
        })

        div.appendChild(p3)
        divbox.append(div, img)
        li.append(p2, divbox)
        document.querySelector(".section_addCards").appendChild(li)
    });
}
cards(insertedValues)


// Adicionando novos Cards
function addCards(){

}
