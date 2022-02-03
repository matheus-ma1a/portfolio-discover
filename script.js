fetch("https://api.github.com/users/matheus-ma1a/repos")
    .then( (resposta) => {
        return resposta.json()
    } )
    .then( (data) => {
        let resultado = data 
        console.log(resultado)
        
        let dataRepo = resultado[10].created_at
        let separador = dataRepo.split('T')
        let date = new Date(`${separador[0]} `)
        console.log(Math.ceil(Math.abs(date - new Date()) / 86400000))
    })
