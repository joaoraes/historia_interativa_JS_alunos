const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "A cidade tem pouco dinheiro. Onde investir primeiro?",
    alternativas: [
      {
        texto: "Educação.",
        afirmacao: "Ao priorizar a educação, a cidade fortaleceu a formação das futuras gerações. A modernização da rede hidráulica reduziu os vazamentos e garantiu o abastecimento. O incentivo à reciclagem gerou renda e diminuiu drasticamente o volume do lixo urbano. O investimento no transporte coletivo tirou muitos carros de circulação e reduziu o tráfego. Ao final do mandato, o município se tornou um exemplo de planejamento e desenvolvimento para a região."
      },
      {
        texto: "Saúde.",
        afirmacao: "Ao investir primeiro na saúde, a população ganhou melhor qualidade de vida e atendimento rápido. As campanhas educativas engajaram os moradores no uso consciente dos recursos hídricos. A ampliação da coleta manteve as ruas limpas e evitou a contaminação do ambiente. A criação de novas vias facilitou os deslocamentos e acelerou o crescimento urbano. Ao final da gestão, o município alcançou estabilidade econômica e social, mantendo o bem-estar dos cidadãos em primeiro lugar."

      }
    ]
  },
  {
    enunciado: "A cidade enfrenta falta de água.",
    alternativas: [
      {
        texto: "Investir em infraestrutura.",
        afirmacao: "afirmacao"
      },
      {
        texto: "Criar campanhas de conscientização.",
        afirmacao: "afirmacao"
      }
    ]
  },
  {
    enunciado: "Há muito lixo nas ruas.",
    alternativas: [
      {
        texto: "Aumentar a coleta.",
        afirmacao: "afirmacao"
      },
      {
        texto: "Investir em reciclagem.",
        afirmacao: "afirmacao"
      }
    ]
  },
  {
    enunciado: "O trânsito está piorando.",
    alternativas: [
      {
        texto: " Melhorar o transporte público.",
        afirmacao: "afirmacao"
      },
      {
        texto: "Construir novas vias.",
        afirmacao: "afirmacao"
      }
    ]

  },
  {
    enunciado: "Depois de quatro anos:",
    alternativas: [
      {
        texto: " A cidade ficou mais sustentável.",
        afirmacao: "afirmacao"
      },
      {
        texto: "A cidade melhorou economicamente, mas ainda enfrenta problemas ambientais.",
        afirmacao: "afirmacao"

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
  caixaPerguntas.textContent = perguntaAtual.enunciado
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa))
    caixaAlternativas.appendChild(botaoAlternativa);
  }
}
function respostaSelecionada(opcaoSelecionada) {
  const afirmacao = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacao + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Em 2030 ...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}
mostraPergunta();
