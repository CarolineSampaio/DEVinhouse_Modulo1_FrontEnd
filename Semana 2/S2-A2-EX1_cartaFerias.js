//Construa um algoritmo que receba informações do funcionário e gere uma carta de pedido de férias conforme a template.
var dataHoje = new Date().toLocaleDateString();

var nomeFuncionario = prompt("Digite o nome do funcionário: ");
var dataInicio = prompt("Digite a data de início das férias: ");
var dataFim = prompt("Digite a data do fim das férias: ");

var cartaFerias = `Caro(a) responsável,

Gostaria de solicitar minhas férias conforme as informações abaixo: 

Nome do funcionário: ${nomeFuncionario} 
Data de Início: ${dataInicio}
Data de Término: ${dataFim}

Agradeço antecipamente pela atenção e aguardo a confirmação do meu pedido.

Atenciosamente, 
${nomeFuncionario}

Data do pedido: ${dataHoje}
`;

console.log(cartaFerias);
