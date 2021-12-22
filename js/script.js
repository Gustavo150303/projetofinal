function enviarMensagem(){
    let nome = document.getElementById("input_nome")
    let telefone = document.getElementById("input_telefone")
    let mensagem = document.getElementById("input_mensagem")

    if(nome.value == ""){
        nome.classList.add("erro");
        nome.placeholder = "O nome é obrigatório!";
    
        if(telefone.value == "")
        telefone.classList.add("erro");
        telefone.placeholder = "O telefone é obrigatório!";
    }else{

        let texto = `Olá me chamo ${nome.value}, ${mensagem.value}`

        let url = `https://api.whatsapp.com/send?phone=5511970186402&text=${texto}` 

        window.open(url)
    }
}