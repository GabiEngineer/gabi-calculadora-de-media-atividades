const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji feliz">';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepção">';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota mínima:'));

let linhas = '';

//Eventos do botão 'Adicionar +'
form.addEventListener('submit', function (e) {
  e.preventDefault(); //Tirando a ação de 'reset' da página

  adicionaLinha();
  atualizarLinha();
  atualizaMediaFinal()
})
//Adicionando conteúdo na tabela
function adicionaLinha() {
  const inputNomeAtividade = document.getElementById('nome-atividade');
  const inputNotaAtividade = document.getElementById('nota-atividade');

  if (atividades.includes(inputNomeAtividade.value)) {
    alert(`A atividade ${inputNomeAtividade.value} já foi adicionada`);
  } else {
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;
  }
  //limpando os inputs
  inputNomeAtividade.value = '';
  inputNotaAtividade.value = '';
}

function atualizarLinha() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
  const mediaFinal = CalculaMediaFinal();

  document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
  document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

  console.log(media);
}

function CalculaMediaFinal() {
  let somdaDasNotas = 0;

  for (i = 0; i < notas.length; i++) {
    somdaDasNotas += notas[i];
  }

  return media = somdaDasNotas / notas.length;
}