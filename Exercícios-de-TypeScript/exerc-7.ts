let linguagem: string[]=["JavaScript", "TypeScript", "Python"];
console.log(`Array Original: ${linguagem}`);

linguagem.push("Java", "C++", "Assembly");
console.log(`Após adicionar: ${linguagem}`);

linguagem.pop();
console.log(`Apóz remover o Ultimo: ${linguagem}`);

console.log("Array:");
    for (let linguagens of linguagem ) {
        console.log("-" + linguagens);
    }                                                      


