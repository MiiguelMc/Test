const {
    sumar,
    restar,
    multiplicar,
    dividir,
  } = require("./calculator");
  
  const a = 10;
  const b = 5;
  
  console.log("Suma:", sumar(a, b));
  console.log("Resta:", restar(a, b));
  console.log("Multiplicación:", multiplicar(a, b));
  console.log("División:", dividir(a, b));
  