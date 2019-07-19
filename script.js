//Entrada de dados do navegador
    //(prompt("Digite o seu ano de nascimento"));

//Saídas de dados do navegador
    //alert("Eaí galera");
    //confirm("Você quer mesmo sair dessa página?");
    //console.log("Eaí galera");

//Exercício nome e data de nascimento
//Início do algoritmo
    //let nome = prompt("Digite o seu nome");
    //let ano = Number(prompt("Digite o seu ano de nascimento"));
    //ano = 2019 - ano;
    //console.log(`Olá, eu me chamo ${nome} tenho ${ano} anos e estou estudando JavaScript.`);
//Fim do algoritmo

//Exercício média das notas
//Início do algoritmo
    let nome1 = prompt("Digite o seu nome");
    let matricula = Number(prompt("Digite a sua matrícula"));
    let nota1 = Number(prompt("Digite a nota da prova 1"));
    let nota2;
    let media;
    if (nota1>=0 && nota1<11) {
        nota2 = Number(prompt("Digite a nota da prova 2"));
            if(nota2>=0 && nota2<11){
                media = (nota1 + nota2)/2;
                alert(`O aluno(a) ${nome1}, matrícula: ${matricula}, obteve a média final ${media}.`);
                if(media>6){
                    alert("Você foi aprovado(a)!");
                }
                    else if(media>3 && media<7){
                        alert("Você está de recuperação!");
                    }
                else{
                    alert("Você foi reprovado(a)!");
                }
            }
            else{
                alert("Nota inválida!");
            }
    }
    else{
        alert("Nota inválida!");
    }
//Fim do algoritmo