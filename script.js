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
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();