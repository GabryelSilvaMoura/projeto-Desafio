// Java Script da Tela Home

// MENU: Aparecer e sumir os itens do menu
function clicou(){
    if (items.style.display == 'block') {
        items.style.display = 'none'
    } else{
        items.style.display = 'block'
    }
}

function mudouTamanho(){
    if(window.innerWidth >= 760){
        items.style.display = 'flex'
    } else{
        items.style.display = 'none'
    }
}


// Aparecer informações dos Cards
passou = document.getElementsByClassName("info")

