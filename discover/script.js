function toggleMode() {
    const html = document.documentElement

    // if(html.classList.contains("light")){
    //    html.classList.remove("light")
    // }else{
    //    html.classList.add("light")
    // }

    html.classList.toggle("light")

    // Pegar imagem
    const img = document.querySelector("#profile img")

    // Substituir a imagem
    if(html.classList.contains("light")){
        // Se tiver light mode, adicionar imagem light
        img.setAttribute("src", "./assets/avatar-light.png")
    }else{
        // Se não tiver light mode, manter imagem normal
        img.setAttribute("src", "./assets/avatar.png")
    }
}