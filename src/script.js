// Seleciona todos os elementos com a classe 'item' (itens do carrossel)
let list = document.querySelectorAll('.item')

// Seleciona os botões de navegação "anterior" e "próximo"
let prev = document.getElementById('prev')
let next = document.getElementById('next')

// Conta o número de itens no carrossel
let count = list.length

// Índice do item atualmente ativo
let active = 0

// Evento de clique no botão "próximo"
next.onclick = () => {
    // Remove a classe 'active' do item atualmente ativo
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    // Atualiza o índice do item ativo (volta ao início se chegar ao final)
    active = active >= count -1 ? 0 : active + 1

    // Adiciona a classe 'active' ao novo item ativo
    list[active].classList.add('active')
}

// Evento de clique no botão "anterior"
prev.onclick = () => {
    // Remove a classe 'active' do item atualmente ativo
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    // Atualiza o índice do item ativo (vai para o final se estiver no início)
    active = active <= 0 ? count -1 : active - 1

    // Adiciona a classe 'active' ao novo item ativo
    list[active].classList.add('active')
}

// Exibe a lista de itens no console para depuração
console.log(list)