fetch("https://api.github.com/users/matheus-ma1a/repos")
    .then( (resposta) => {
        return resposta.json()
    } )
    .then( (data) => {
        console.log(data)
    })