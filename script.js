const atividade = {
  nome: "Almoço",
  data: new Date("2024-07-11 13:00"),
  finalizada: true
}

let atividades = [
  atividade,
  {
    nome: 'Academia em grupo',
    data: new Date("2024-07-11 18:45"),
    finalizada: false
  },
  {
    nome: "Gaming session",
    data: new Date("2024-07-11 21:45"),
    finalizada: true
  }
  ]

atividades = []

const criarItemDeAtividade = (atividade) => {

  let input = '<input type="checkbox" '

  if (atividade.finalizada) {
    input += 'checked'
  }

  input += '>'

  return `
  <div>
      ${input}
      <span>${atividade.nome}</span>
      <time>${atividade.data}</time>
    </div>
  `
}

const section = document.querySelector('section')
for (let atividade of atividades) {
  section.innerHTML += criarItemDeAtividade(atividade)
}