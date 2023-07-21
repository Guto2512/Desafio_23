function validacao(){

    let nome = document.getElementById("i_nome")
    let sobrenome = document.getElementById("i_sobrenome")
    let data = document.getElementById("i_data")
    let senha = document.getElementById("i_senha")
    let con_senha = document.getElementById("i_conSenha")
    let acesso = document.getElementById("i_cod")
    let email = document.getElementById("i_email")


    estilo_input(nome, "#f45656", "#808080")
    estilo_input(sobrenome, "#f45656", "#808080")
    estilo_input(data, "#f45656", "#808080")
    estilo_input(senha, "#f45656", "#808080")
    estilo_input(con_senha, "#f45656", "#808080")
    estilo_input(acesso, "#f45656", "#808080")
    estilo_input(email, "#f45656", "#808080")


}


function estilo_input(input, cor_1, cor_2){

    var alert = document.getElementById("f_alert")

    if(!input.checkValidity()){
        alert.style.display = "block"
        return input.style.border = `3px solid ${cor_1}`
    }else{
        alert.style.display = "none"
        return input.style.border = `1px solid ${cor_2}`
    }

}