let tabela = document.getElementById("tabela1");

tabela.dataset.tabela1 = "5";

let quant_dados = parseInt(tabela.dataset.tabela1); 
let conteudo = "";

console.log(quant_dados);
for(let i = 0; i < quant_dados; i++){
    conteudo += "<tr>"+"<td>"+"flamengo"+"</td>"+ "<td>"+ "0x0"+ "</td>"+"<td>"+"vasco"+"</td>"+"</tr>";
}
console.log("aqui");
tabela.innerHTML = conteudo;