function gerarSaudacao(pessoa: {primeiroNome: string; segundoNome: string }): string{
    if (pessoa.segundoNome){
        return `Olá,${pessoa.primeiroNome} ${pessoa.segundoNome}!`;
    } else {
        return `Olá, ${pessoa.primeiroNome}!`;
    }
}

const saudacao1 = gerarSaudacao({primeiroNome:  "Vitorio", segundoNome: "Augusto"});
const saudacao2 = gerarSaudacao({primeiroNome: "João", segundoNome: "silva"});

console.log(saudacao1);
console.log(saudacao2);