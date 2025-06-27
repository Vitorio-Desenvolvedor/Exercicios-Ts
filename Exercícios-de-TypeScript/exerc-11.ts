function combine(valorBooleano: boolean, valorNumero: number): boolean | number {
    if(valorBooleano) {
        return valorNumero;
    } else {
        return false;
    }
}

let resultado1 = combine(true, 42);
console.log(`Resultado 1: ${resultado1}`);

let resultado2 = combine(false, 100);
console.log(`Resultado 2:${resultado2}`);