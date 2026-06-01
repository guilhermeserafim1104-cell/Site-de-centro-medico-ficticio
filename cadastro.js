let formulario=document.getElementById("formulario");
let confirmacao=document.getElementById("confirmacao_senha");
let senha=document.getElementById("senha");
let mensagem=document.getElementById("mensagem");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    if(confirmacao.value!==senha.value){
        mensagem.innerText="Erro. As senha devem ser idênticas";
        mensagem.style.color="red";
        return;
    }

    let nomeUsuario=document.getElementById("nome").value;
    let emailUsuario=document.getElementById("email").value;
    let nascimentoUsuario=document.getElementById("nascimento").value;
    let generoUsuario=document.getElementById("genero").value;
    let senhaUsuario=senha.value;
    
    let dadosUsuario={
        nome:nomeUsuario,
        email:emailUsuario,
        nascimento:nascimentoUsuario,
        genero:generoUsuario,
        senhals:senhaUsuario
    };

    localStorage.setItem("usuario", JSON.stringify(dadosUsuario));

    if(formulario.checkValidity()){
        window.location.href="index.html";
    }else{
        formulario.reportValidity();
    }
})