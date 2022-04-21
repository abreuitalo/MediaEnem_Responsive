function verificar() {
  //1º passo: realizar as ligações das variáveis aos inputs
  let boxLing = document.getElementById('ling')
  let boxHuma = document.getElementById('hum')
  let boxNat = document.getElementById('nat')
  let boxMat = document.getElementById('mat')
  let boxRedacao = document.getElementById('reda')
  let res = document.querySelector('div.txtnota')

  //2º passo: realizar a conversão de String para Number
  let linguagens = Number(boxLing.value)
  let humanas = Number(boxHuma.value)
  let natureza = Number(boxNat.value)
  let mat = Number(boxMat.value)
  let redacao = Number(boxRedacao.value)

  //3º cálculo da média
  let media = (linguagens + humanas + natureza + mat + redacao) / 5
  res.innerHTML = media.toFixed(1)
}
