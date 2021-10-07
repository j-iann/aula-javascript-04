//#1
var valores_numericos = [25, 23, 11, 55, 30, 6, 4, 21, 34, 89, 56];
valores_numericos.sort(function(a, b) {
    if(a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
})

console.log(valores_numericos)

//#2
var times = ["Santos", "Sport", "Santa Cruz", "Vasco", "Chapecó"];
times.push("Flamengo");
times.shift();
times.unshift("Palmeiras");
times.push("Grêmio");
times.unshift("São Paulo", "Santos");
console.log(times.length);
times.pop();
times.sort();
console.log(times);

//#3
var atividades = ["Comer", "Conversar", "Escovar os dentes", "Arrumar a cama", "Lavar o rosto", "Pentear o cabelo", "Estudar"];
atividades.sort();
console.log(atividades.reverse);
console.log(atividades[3] + " " + atividades[6]);
console.log(atividades.join(" - "))

var atividades_02 = ["Usar o computador", "Tomar banho"];
var novo_atividades = atividades.concat(atividades_02)
console.log(novo_atividades);

//#4
var cidades = ["Tokyo", "Osaka", "Sapporo", "Kyoto", "Nagoya"];
cidades.shift();
cidades.pop();
cidades.sort();
console.log(cidades);