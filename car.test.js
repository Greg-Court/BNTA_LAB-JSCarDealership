const {Car} = require("./car");

const car1 = new Car("BMW", 5000, "V8");

describe("car properties access", () => {

  test("can access manufacturer", () => {
    const expected = "BMW";
    const actual = car1.manufacturer;
    expect(actual).toBe(expected);
  })

  test("can access manufacturer", () => {
    const expected = 5000;
    const actual = car1.price;
    expect(actual).toBe(expected);
  })

  test("can access manufacturer", () => {
    const expected = "V8";
    const actual = car1.engineType;
    expect(actual).toBe(expected);
  })

})

