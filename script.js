// bibliotecas e códigos de terceiros
const formatador = (data) => {
  return {
    dia: {
      numerico: dayjs(data).format('DD'),

      semana: {
        curto: dayjs(data).format('ddd'),
        longo: dayjs(data).format('dddd'),
      }
    },
    mes: dayjs(data).format('MMMM'),
    hora: dayjs(data).format('HH:mm')
  }
}

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

// atividades = []

const criarItemDeAtividade = (atividade) => {

  let input = '<input type="checkbox" '

  if (atividade.finalizada) {
    input += 'checked'
  }

  input += '>'

  const formatar = formatador(atividade.data)

  return `
  <div>
      ${input}
      <span>${atividade.nome}</span>
      <time>${formatar.dia.semana.longo},
      dia ${formatar.dia.numerico}
      de ${formatar.mes}
      às ${formatar.hora}</time>
    </div>
  `
}

const atualizarListaDeAtividades = () => {
  const section = document.querySelector('section')

  // verificar se a lista está vazia 
  if (atividades.length == 0) {
    section.innerHTML = `<p>Nenhuma atividade cadastrada.</p>`
    return
  }

  for (let atividade of atividades) {
    section.innerHTML += criarItemDeAtividade(atividade)
  }

}

atualizarListaDeAtividades()