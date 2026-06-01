let formulario=document.getElementById("formulario");
let especializacao=document.getElementById("especializacao");
let dia=document.getElementById("dia");
let hora=document.getElementById("hora");
let mensagem=document.getElementById("mensagem");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    let especializacaols=especializacao.value;
    let dials=dia.value;
    let horals=hora.value;

    let consulta={
        especializacao:especializacaols,
        dia:dials,
        hora:horals
    };

    localStorage.setItem("consulta", JSON.stringify(consulta));

    if(especializacaols!=="" && dials!=="" && horals!==""){
        mensagem.style.display="block";
    }

    formulario.reset();

    setTimeout(function(){
        mensagem.style.display="none";
    }, 5000);
});