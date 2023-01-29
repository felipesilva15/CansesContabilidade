function activeDropdown(idDropdown){
    if(idDropdown == ""){
        return;
    }

    let descricao = document.getElementById(idDropdown).children[0].children[1];
    let imagem = document.getElementById(idDropdown).children[0].children[0].children[1].children[0].children[0]
    let display = window.getComputedStyle(descricao, null).getPropertyValue("display")

    if(display == "none"){
        $(descricao).css("display", "block");
        $(imagem).prop("src", "images/seta-cima.png")
    }
    else{
        $(descricao).css("display", "none")
        $(imagem).prop("src", "images/seta-baixo.png")
    }
}