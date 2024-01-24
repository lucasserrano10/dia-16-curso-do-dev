let nomes = []
let senhas = []

function solicitaropcao() {
    let opcao = prompt("cadastro = 1, login = 2, excluir cadastro = 3 e encerrar prrogama = 4")
    return opcao
}

function cadastrarusuario() {
    nomes.push(prompt("nome para cadastro :")) 
    senhas.push( prompt("senha para cadastro :"))
    return alert("cadastrado com sucesso !")
}

function login(nome, senha) {
    let indice = nomes.indexOf(nome)
    if (indice !== -1 && senhas[indice] == senha) {
        return true && alert("login efetuado com sucesso")
    } else {
        return false && alert("usuario ou senha estão incorretos")
    }
}

function excluircadastro(nome) {
    let indice = nomes.indexOf(nome)
    if (indice !== -1) {
        nomes.splice(indice, 1)
        senhas.splice(indice, 1)
        return alert("usuário excluído com sucesso")
    } else {
        return alert("Não é possivel excluir,pois o usuário não esta cadastrado no sistema")
    }
}

let continuar = true
while (continuar) {
    switch (solicitaropcao()) {
        case "1":
            cadastrarusuario()
            break
        case "2":
            let nome = prompt("nome para login :")
            let senha = prompt("senha para login")
            login(nome, senha)
            break
        case "3":
            let nomeexcluir = prompt("nome para exclusão do cadastro ")
            excluircadastro(nomeexcluir)
            break
        case "4":
            continuar = false
        default:
            alert("encerrando programa !")

    }
}