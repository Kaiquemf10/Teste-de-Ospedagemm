// SALDO E XP
let saldo = 0;
let xp = 0;

// ELEMENTOS
const saldoElemento = document.getElementById("saldo");
const xpElemento = document.getElementById("xp");
const notification = document.getElementById("notification");

// SISTEMA DE COMPRA
function comprar(valor){

  let cashback = valor * 0.10;

  saldo += cashback;
  xp += valor * 5;

  saldoElemento.innerHTML =
    `R$ ${saldo.toFixed(2)}`;

  xpElemento.innerHTML =
    `${xp} XP`;

  salvarDados();

  mostrarNotificacao(
    `💰 Você ganhou R$${cashback.toFixed(2)} de cashback!`
  );
}

// NOTIFICAÇÕES
function mostrarNotificacao(texto){

  notification.innerHTML = texto;

  notification.style.display = "block";

  setTimeout(() => {
    notification.style.display = "none";
  },3000);
}

// NOTIFICAÇÕES AUTOMÁTICAS
setInterval(() => {

  const mensagens = [

    "🔥 Coxinha com 50% OFF agora!",
    "💰 Cashback dobrado nos combos!",
    "⚡ Refrigerante em promoção relâmpago!",
    "🎁 Cupom liberado para você!",
    "🍔 Últimas unidades do combo universitário!"

  ];

  const aleatoria =
    mensagens[Math.floor(Math.random() * mensagens.length)];

  mostrarNotificacao(aleatoria);

},10000);

// DARK MODE
const darkBtn =
document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

});

// LOCAL STORAGE
function salvarDados(){

  localStorage.setItem("saldo", saldo);
  localStorage.setItem("xp", xp);

}

function carregarDados(){

  const saldoSalvo =
    localStorage.getItem("saldo");

  const xpSalvo =
    localStorage.getItem("xp");

  if(saldoSalvo){

    saldo = parseFloat(saldoSalvo);

    saldoElemento.innerHTML =
      `R$ ${saldo.toFixed(2)}`;

  }

  if(xpSalvo){

    xp = parseInt(xpSalvo);

    xpElemento.innerHTML =
      `${xp} XP`;

  }

}

carregarDados();

// GRÁFICO
const ctx =
document.getElementById("grafico");

new Chart(ctx, {

  type:"bar",

  data:{

    labels:[
      "Seg",
      "Ter",
      "Qua",
      "Qui",
      "Sex"
    ],

    datasets:[{

      label:"Vendas",

      data:[
        120,
        190,
        300,
        250,
        420
      ]

    }]

  }

});

// CADASTRO DE PRODUTOS
const form =
document.getElementById("produtoForm");

form.addEventListener("submit",(e)=>{

  e.preventDefault();

  mostrarNotificacao(
    "✅ Produto cadastrado com sucesso!"
  );

});

// SISTEMA DE PROMOÇÃO AUTOMÁTICA
function verificarPromocoes(){

  console.log(
    "Produtos antigos receberam desconto automaticamente."
  );

}

verificarPromocoes();
