const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", enviarFormulario);

function enviarFormulario(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const feedback = document.getElementById("feedback").value;
    const mensagem = document.getElementById("mensagem");

    if(nome == "" || feedback == ""){

        mensagem.innerHTML = "Preencha todos os campos.";

    }else{

        mensagem.innerHTML = "Obrigado pelo feedback, " + nome + "! Sua mensagem foi enviada com sucesso.";

        formulario.reset();

    }

}