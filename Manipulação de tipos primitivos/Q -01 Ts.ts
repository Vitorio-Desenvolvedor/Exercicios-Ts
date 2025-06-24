function processarDados (nome: string, idades: number[]): void {
    console.log(`Olá, ${nome.toUpperCase()} !!`)

    let soma = 0;
    for(let i = 0; i < idades.length; i++ ) {
        soma  += idades[1]; }

        console.log(`A soma das idades ${soma}`)
    
    if (idades.length > 0 ) {
        const primeiraIdade = idades[0];
        if (primeiraIdade % 2 === 0 ){
            console.log (" A primeira idade é par");
        } else{
            console.log("A primeira idade é impar")
        }
    }
    
}

processarDados("Vitorio", [10, 40, 54]);