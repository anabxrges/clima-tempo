const key = "6ccf415a079e46b9408ae39b87042845";

async function buscarCidade (cidade) {
  const dados = await fetch (`"https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}"`).then (resposta => resposta.json ());
  
  console.log (dados);
}

function cliqueiNoBotao () {
  const cidade = document.querySelector (".input-cidade").value;
  
  buscarCidade(cidade);
}
