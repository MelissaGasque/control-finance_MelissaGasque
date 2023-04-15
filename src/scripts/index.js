function cards(insertedValues){
    // Limpa a lista de cards
    document.querySelector(".section_addCards").innerHTML = "";

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
            p3.innerText = "-Saída-"
        }

        const img = document.createElement("img")
        img.id = "card_button-lixo"
        img.src="src/assets/img/trash.svg"
        img.alt = "lixeira"

        img.addEventListener("click", ()=>{
            removerCard(card.id);
        })

        div.appendChild(p3)
        divbox.append(div, img)
        li.append(p2, divbox)
        document.querySelector(".section_addCards").appendChild(li)
    });
}

//Adicionar objetos na array
function addObjeto(){
    const valueInput = document.getElementById("modal_addValue-number");
    const categoryInput = document.querySelector("input[name='valueType']:checked");
    const button = document.querySelector("#modal_button-inserirValor")
    
    button.addEventListener("click", ()=>{
        const newElement = {
            id: insertedValues.length + 1,
            value: parseFloat(valueInput.value),
            categoryID: parseInt(categoryInput.value),
          };
          
          insertedValues.push(newElement);
          cards(insertedValues);
          console.log(insertedValues)
    })
}

// Remover elemento da array
function removerCard(id) {
    const index = insertedValues.findIndex((element) => element.id === id);
    if (index >= 0) {
        insertedValues.splice(index, 1);
        cards(insertedValues);
    }
}

//Botão Cancelar
function cancelar(){
    const button = document.querySelector("#modal_button-cancelar")
    button.addEventListener("click", ()=>{
        document.querySelector("#modal_addValue-number").value =""

    })
}


// Inicialização
cancelar();
cards(insertedValues);
addObjeto();
