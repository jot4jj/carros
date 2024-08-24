let itens = document.querySelectorAll(".item")
let next = document.querySelector("#next")
let prev = document.querySelector("#prev")
let contador = itens.length //3 [0, 1, 2]
let ativo = 0

document.addEventListener("keydown", (evt) =>{

    if (evt.key == 'ArrowRight'){
        let active = document.querySelector(".ativo")
        active.classList.remove("ativo")

        ativo = ativo >= contador-1 ? 0 : ativo+1
        itens[ativo].classList.add("ativo")
    }
})

document.addEventListener("keydown", (evt) =>{

    if (evt.key == 'ArrowLeft'){
        let active = document.querySelector(".ativo")
        active.classList.remove("ativo")

        ativo = ativo == 0 ? contador-1 : ativo-1
        itens[ativo].classList.add("ativo")
    }
})

next.addEventListener("click", () =>{

    let active = document.querySelector(".ativo")
        active.classList.remove("ativo")

        ativo = ativo >= contador-1 ? 0 : ativo+1
        itens[ativo].classList.add("ativo")
})

prev.addEventListener("click", ()=>{

    let active = document.querySelector(".ativo")
        active.classList.remove("ativo")

        ativo = ativo == 0 ? contador-1 : ativo-1
        itens[ativo].classList.add("ativo")
})