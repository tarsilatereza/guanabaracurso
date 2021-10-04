// AULA DE LAÇOES 
// REPETIÇÕES 



// WHILE = ESTRUTURA DE REPETIÇÃO COM TESTE LÓGICO NO INÍCIO - PRIMEIRO TESTA SENDO VERDADEIRO RODA O CÓDIGO

var contador = 1;

while (contador <= 6) {
    console.log(`${contador} hello world`)
    contador++
}

// DO WHILE = ESTRUTURA DE REPETIÇÃO COM TESTE LÓGICO NO FINAL - PRIMEIRO EXECUTA DEPOIS TESTA

do {
    console.log(`${contador} hello world`)
    contador++
} while (contador <=6)