// Função para verificar se todos os campos estão preenchidos
function verificarCampos() {
    const num1 = document.getElementById("peso").value;
    const num2 = document.getElementById("altura").value;
    const botaoCalcular = document.getElementById("calcular");

    // Habilita o botão apenas se ambos os campos estiverem preenchidos
    botaoCalcular.disabled = !(num1.trim() !== "" && num2.trim() !== "");
}

// Função para calcular o IMC
function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        alert("Digite valores válidos para peso e altura.");
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = (imc < 18.5) ? "você está abaixo do peso!\n\n Isso pode indicar desnutrição, deficiência de nutrientes ou doenças específicas. Procure um médico para investigar!" :
        (imc < 25) ? "seu peso é normal!\n\n Este resultado é ideal para a maioria das pessoas. Se mantenha saudável com boms hábitos alimentares e faça exercícios" :
            (imc < 30) ? "você está com sobrepeso! \n\n Isso pode ser um alerta para risco de diabetes, hipertensão e problemas cardiovasculares. Tenha uma dieta equilibrada e faça exercícios" :
                (imc < 35) ? "você tem obesidade Grau I: \n Isso aumenta a chance de ter doenças como diabetes e colesterol alto. Procure seu médico!" :
                    (imc < 40) ? "você tem  Grau II: \n Isso indica alto risco de problemas cardíacos e apneia do sono. Procure seu médico!" :
                        "você tem obesidade Grau III: \n Existe um risco muito alto de doenças cardíacas e AVC . Procure seu médico!";

    // Exibe o resultado no elemento HTML
    document.getElementById("resultado").innerText = `Seu IMC é ${imc.toFixed(2).replace(".", ",")} ou seja, ${classificacao} `;
}

// Registra eventos após o carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("peso").addEventListener("input", verificarCampos);
    document.getElementById("altura").addEventListener("input", verificarCampos);
    document.getElementById("calcular").addEventListener("click", calcularIMC);
});
