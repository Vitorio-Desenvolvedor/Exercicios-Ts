function Impar(valor: number): boolean {
    
    if (typeof valor !== "number") {
        throw new Error("O valor precisa ser número.");
        
    }
    return valor % 2 !==0;
}

console.log(Impar(7));
console.log(Impar(6));