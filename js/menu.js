//Seleciona o titulo do Menu
const botaoMenu = document.querySelector(".titulo-menu a")

//Seleciona a lista de links 
const listaLinks = document.querySelector(".links-menu")

//Ouvinte de Eventos
botaoMenu.addEventListener("click", function (event) {
    //desativando/anulando o comportamento padrão de recarregar a página através de um link 
    event.preventDefault();
    
    //Abrindo e Fechando a lista do menu 
    listaLinks.classList.toggle("aberto")

    //Mudando a palavra MENU quando estiver aberto

    if (listaLinks.classList.contains("aberto")) {
        botaoMenu.innerHTML = "Fechar &times;"
    } else {
        botaoMenu.innerHTML = "Menu &equiv;"
    }

})

console.log();

