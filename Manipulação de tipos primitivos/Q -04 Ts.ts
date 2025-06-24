function processarID(id: number | string): void {
  if (typeof id === "string") {
    console.log("Seu ID (string) em minúsculas:", id.toLowerCase());
  } else {
    console.log("Seu ID (number) multiplicado por 2:", id * 2);
  }
}

processarID("ABCDEFG"); 
processarID(159);         

const nomes = ["Vitório", "Augusto", "Marcos"];

nomes.forEach((nome) => {
  console.log(nome.toUpperCase());
});
