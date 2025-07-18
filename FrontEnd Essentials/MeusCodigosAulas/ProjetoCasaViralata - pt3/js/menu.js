let navMenu = document.querySelector('.nav-menu');
let sanduiche = document.querySelector('.sanduiche');

// vamos criar uma função que adiciona ou remove a classe active uma função representa um conjunto de funcionalidades, que deve ser aplicada a qualquer elemento da página, podemos ter milhões de funções

function toggleMenu() {
    sanduiche.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// atribuindo a função ao sanduiche, a função toggleMenu será executada quando clicarmos nele, quero que funcione quando um clique for dado no sanduiche

sanduiche.addEventListener('click', toggleMenu);

// criar uma função anônima para o click nas opções do menubar, assim o menu é fechado

navMenu.addEventListener('click', (event) => {
    if (event.target.classList.contains('item-menu')) {
        toggleMenu();
    }
})