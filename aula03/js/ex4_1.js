// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");
console.log('carregou javascript')
// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault()    // evita envio do form
    const nome = frm.inNome.value   // obtém valores do form
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)
    console.log(nota1)
    console.log(nota2)
    const media = (nota1 + nota2) / 2 // calcula média
    console.log(media)
    resp1.innerText = `Média das Notas ${media.toFixed(2)}`
    // cria condições
    if (media >= 7){
        // altera texto e estilo da cor do elemento resp2
        resp2.innerText=`Parabéns ${nome}! Você foi aprovado(a)`
        resp2.style.color = "blue";
    } else {
        resp2.innerText=`Ops ${nome}... Você foi reprovado(a)`
        resp2.style.color = "red";      
    }
})