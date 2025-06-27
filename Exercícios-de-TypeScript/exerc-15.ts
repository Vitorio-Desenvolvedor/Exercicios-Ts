let valores: (number | string | boolean) [] = [42, "Olá", true];

let num = valores[0] as number;
let str = valores[1] as string;
let bool = valores[2] as boolean;

console.log(`Número: ${num}`);
console.log(`String: ${str}`);
console.log(`Boolean: ${bool}`);