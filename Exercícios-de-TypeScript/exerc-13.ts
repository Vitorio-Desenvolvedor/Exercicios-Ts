function verificarTipo(valor: string | number) {
    if (typeof valor === "string") {
      console.log("É tipo string:", valor);
    }
     else if (typeof valor === "number")
         {
      console.log("É tipo number:", valor);
    }
}
  
  verificarTipo("Olá");
  verificarTipo(77);
  