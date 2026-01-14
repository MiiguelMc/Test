const {
    sumar,
    restar,
    multiplicar,
    dividir,
  } = require("./calculator");
  
  test("sumar 2 + 3 = 5", () => {
    expect(sumar(2, 3)).toBe(5);
  });
  
  test("restar 5 - 3 = 2", () => {
    expect(restar(5, 3)).toBe(2);
  });
  
  test("multiplicar 4 * 3 = 12", () => {
    expect(multiplicar(4, 3)).toBe(12);
  });
  
  test("dividir 10 / 2 = 5", () => {
    expect(dividir(10, 2)).toBe(5);
  });
  
  test("dividir entre cero lanza error", () => {
    expect(() => dividir(10, 0)).toThrow("No se puede dividir entre cero");
  });
  