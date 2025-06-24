let dadosFlexiveis: any;

dadosFlexiveis = "Olá, JavaScript";
console.log(dadosFlexiveis);

dadosFlexiveis = 123;
console.log(dadosFlexiveis);

function inferirTipo(valor: any) {
    console.log(typeof valor)
}

inferirTipo ("Java");
inferirTipo(404);