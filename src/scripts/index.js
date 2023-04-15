//Filtragem das entradas e saídas
function filtroEntrada(insertedValues){
    const buttonEntradas = document.querySelector("#nav_button-entradas")
    buttonEntradas.addEventListener("click", ()=>{
    const entradas = insertedValues.filter(insertedValues => insertedValues.categoryID === 0)
    cards(entradas)
   })
}

function filtroSaídas(insertedValues){
    const buttonSaidas = document.querySelector("#nav_button-saidas")
    buttonSaidas.addEventListener("click", ()=>{
        const saidas = insertedValues.filter(insertedValues => insertedValues.categoryID === 1)
        cards(saidas)
}) 
}

function semFiltro(insertedValues){
    const buttonTodos = document.querySelector("#nav_button-todos")
    buttonTodos.addEventListener("click", ()=>{
        const todos = insertedValues.filter(insertedValues => insertedValues.categoryID === 0 || insertedValues.categoryID === 1)
        cards(todos)
    })
}

//Cards já existentes
function cards(insertedValues){
    // Limpa a lista de cards: Quando um card é adicionado, a lista reinicia e imprime apenas a array
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

//Adicionar elementos na array
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
          valorTotal(insertedValues) // A soma será realizada sempre que houver uma adição
    })
}

// Remover elemento da array
function removerCard(id) {
    const index = insertedValues.findIndex((element) => element.id === id);
    if (index >= 0) {
        insertedValues.splice(index, 1);
        cards(insertedValues);
    }
    valorTotal(insertedValues)
    semCards(insertedValues)
}

//Somar os valores da array
function valorTotal(insertedValues){
    const valor = document.querySelector("#section_valorTotal-number")
    const soma = insertedValues.reduce((acumulator, values)=>{
    if(values.categoryID === 0){
       return  acumulator + values.value
    }else if(values.categoryID === 1){
        return acumulator - values.value
    }
    return acumulator
}, 0 )
    valor.innerHTML = `R$ ${soma.toFixed(2)}`
}    

// Array sem registros
function semCards(insertedValues){
    const ul = document.querySelector(".section_addCards")
    if(insertedValues.length === 0){
        const div = document.createElement("div")
        div.classList.add("section_card")
        div.id = id="sem_registro"
    
        const p1 = document.createElement("p")
        p1.id = "nenhum_valor"
        p1.innerText = "Nenhum Valor Cadastrado"

        const p2 = document.createElement("p")
        p2.id = "registrar_valor"
        p2.innerText = "Registrar novo valor"

        div.append(p1, p2)
        ul.appendChild(div)
    }
}

//Botão Cancelar Modal
function cancelar(){
    const button = document.querySelector("#modal_button-cancelar")
    button.addEventListener("click", ()=>{
        document.querySelector("#modal_addValue-number").value =""
    })
}


// Inicialização
filtroEntrada(insertedValues)
filtroSaídas(insertedValues)
semFiltro(insertedValues)
semCards(insertedValues)
cancelar();
cards(insertedValues);
addObjeto();
valorTotal(insertedValues)
