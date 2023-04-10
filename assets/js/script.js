document.querySelector("#qtde").addEventListener("change", calcularIngresso)
document.querySelector("#pagamento").addEventListener("change", calcularIngresso)
document.querySelector("#credito_sim").addEventListener("change", calcularIngresso)
document.querySelector("#credito_nao").addEventListener("change", calcularIngresso)

function calcularIngresso() {
    
    let preco = qtde.value * 100
    if (pagamento.checked) preco *= 0.9
    if(credito_sim.checked) preco += 100   

    output.innerHTML = "R$ " + preco.toFixed(2)
}