const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Imagine que você irá fazer um curso em uma escola de idiomas, qual curso você escolheria?",
        alternativas: [
            {
                texto: "Ingês!",
                afirmacao: "Tem interesse em inglês. "
            },
            {
                texto: "Espanhol!",
                afirmacao: "Tem interesse em inglês."
            }
        ]
    },
    {
        enunciado: "E se você pudesse escolher a forma de ensino, qual você escolheria?",
        alternativas: [
            {
                texto: "Presencial",
                afirmacao: "Prefere aulas presenciais."
            },
            {
                texto: "Online.",
                afirmacao: "Aprende melhor com ensino online."
            }
        ]
    },
    {
        enunciado: "Você gostaria de ter um professor particular, que daria aula somente para você, ou um professor que desse aula para uma sala de aula?",
        alternativas: [
            {
                texto: "Particular.",
                afirmacao: "Entende melhor com uma explicação direta."
            },
            {
                texto: "Aula para a sala toda.",
                afirmacao: "Entende melhor com interação de outras pessoas."
            }
        ]
    },
    {
        enunciado: "Você gostaria de ter aulas práticas?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Gosta de ter aulas dinâmicas."
            },
            {
                texto: "Não.",
                afirmacao: "Gosta mais de aulas teóricas"
            }
        ]
    },
    {
        enunciado: "Você faria curso regular ou intensivo?",
        alternativas: [
            {
                texto: "Regular. Quero aprender o idioma com calma contendo menos aulas na semana",
                afirmacao: "Faz o curso com mais tempo."
            },
            {
                texto: "Intensivo. Quero aprender o idioma em curto prazo, contendo mais aulas durante a semana",
                afirmacao: "o aluno tem pressa para terminar o curso e prefere fazer mais aulas."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O aluno...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();