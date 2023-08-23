const modal = document.querySelector('.modal-container') //vai abrir o meu modal
const button = document.querySelector('.btn') // botão que vou usar pra poder quando clicar abrir o modal
const nome = document.querySelector('#nome') // pega o nome do meu input 
const salario = document.querySelector('#salario') // pega o valores do input do salário
const resultado = document.querySelector('#resultado') //envia os valores pra meu p 


button.addEventListener('click', calcular)

function calcular(){
    event.preventDefault()

    let inss = salario.value * 0.05
    let r
    if(salario.value > 3500){
        r = salario.value * 0.18
    }else{
        r = salario.value * 0.08
    }
       

    let desconto = inss + r

    var salarioLiquido = salario.value - desconto

    if(salario.value && nome.value){
        resultado.innerHTML = `<h2> ${salarioLiquido} </h2>`
    }else{
        resultado.innerHTML = `<h2>Por favor insira o seu nome e o seu salário</h2>`
    }
    openModal()
}






function openModal(){
    modal.classList.add('active')
}

function closeModal(){
    modal.classList.remove('active')
}

180
828