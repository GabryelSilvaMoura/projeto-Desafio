// MENU
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