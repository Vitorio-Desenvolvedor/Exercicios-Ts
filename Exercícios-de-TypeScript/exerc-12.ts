interface Car {
    make: string;
    model: string;
  }
  
  type Bus = {
    make: string;
    model: string;
    payloadCapacity: number;
  };
  
 
  type Vehicle = Car | Bus;
  
  
  const meuCarro: Vehicle = {
    make: "Toyota",
    model: "Corolla"
  };
  

  const meuOnibus: Vehicle = {
    make: "Mercedes",
    model: "Sprinter",
    payloadCapacity: 3000
  };
  
  console.log("Carro:", meuCarro);
  console.log("Ônibus:", meuOnibus);
  