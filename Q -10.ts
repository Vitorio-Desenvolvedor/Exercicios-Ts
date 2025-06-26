let result: string | number;

result = "Olá";
console.log("Valor de result:", result);

result = 123;
console.log("Novo valor de result:", result);

function mostrarTipo(valor: string | number | boolean): void {
    console.log(`O valor é "${valor}" e o tipo é: ${typeof valor}`);
}

mostrarTipo("teste");
mostrarTipo(456);
mostrarTipo(true);
