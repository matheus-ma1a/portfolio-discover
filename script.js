const card1 = document.querySelector(".nomeRepo")
const descricao = document.querySelector(".descricao")
const card2 = document.querySelector(".nomeDoRepoDois")
const descricaoDois = document.querySelector(".descricao.dois")


function pegaDados (){

    fetch("https://api.github.com/users/matheus-ma1a/repos")
    .then( (resposta) => {
        return resposta.json()
    } )
    .then( (data) => {
        card1.innerHTML = data[9].name
        descricao.innerHTML = data[9].description

        card2.innerHTML = data[8].name
        descricaoDois.innerHTML = data[8].description
    })
}

pegaDados()
