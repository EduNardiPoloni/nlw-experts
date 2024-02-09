const perguntas = [
    {
      pergunta: "O que significa a sigla 'DOM' em JavaScript?",
      respostas: [
        "Document Object Model",
        "Data Object Model",
        "Dynamic Object Model",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função de 'console.log()' em JavaScript?",
      respostas: [
        "Para imprimir dados no console do navegador",
        "Para criar uma nova variável",
        "Para definir o estilo de um elemento HTML",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador utilizado para atribuição em JavaScript?",
      respostas: [
        "=",
        "==",
        "+=",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "let myVar;",
      ],
      correta: 2
    },
    {
      pergunta: "O que faz o método 'charAt()' em JavaScript?",
      respostas: [
        "Remove caracteres de uma string",
        "Adiciona caracteres a uma string",
        "Retorna o caractere em uma posição específica de uma string",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o tipo de dado retornado pelo operador 'typeof' em JavaScript?",
      respostas: [
        "String",
        "Number",
        "String, Number ou Object",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado de 3 + 2 + '7' em JavaScript?",
      respostas: [
        "12",
        "57",
        "327",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função anônima em JavaScript?",
      respostas: [
        "Uma função sem nome atribuído",
        "Uma função que não retorna nada",
        "Uma função com argumentos desconhecidos",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "pop()",
        "concat()",
      ],
      correta: 0
    },
    {
      pergunta: "O que é 'NaN' em JavaScript?",
      respostas: [
        "Um acrônimo para 'Nada Natural'",
        "Um valor que representa 'Não é um número'",
        "Um tipo de operador lógico",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  
  