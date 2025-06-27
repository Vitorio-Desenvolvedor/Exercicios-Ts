function calcularComprimento (input: string | string[]): number {
    if (typeof input === "string") {
      return input.length;
    } else {
     
      let arr = input as string[];
      let soma = 0;
      for (let s of arr) {
        soma += s.length;
      }
      return soma;
    }
  }
  
  console.log(calcularComprimento("Olá Mundo")); 
  
  console.log(calcularComprimento(["um", "dois", "três"])); 