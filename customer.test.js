const {Dealership} = require("./dealership");
const {Car} = require("./car");
const {Customer} = require("./customer");


const dealership1 = new Dealership("HansineGregThinesan Dealership", 6, []);
const customer1 = new Customer("Ed", 10000)

describe("customer properties access", () => {

  test("can access name", () => {
    const expected = "Ed";
    const actual = customer1.name;
    expect(actual).toBe(expected);
  })

  test("can access manufacturer", () => {
    const expected = 10000;
    const actual = customer1.wallet;
    expect(actual).toBe(expected);
  })

  test("can access car", () => {
    const expected = null;
    const actual = customer1.car;
    expect(actual).toBe(expected);
  })

})

describe("customer methods", () => {

  test("customer rejected if not enough money", () => {
    const car1 = new Car("BMW", 11000, "V8");
    dealership1.addCar(car1);
    const expected = "No money no car g";
    try {
      customer1.buyCar;
    } catch(error) {
      expect(error.message).toBe(expected);
    }
  })

  test("can buy car", () => {
    const car1 = new Car("BMW", 9000, "V8");
    dealership1.addCar(car1);
    customer1.buyCar(dealership1, 1);
    const actual = customer1.car;
    const expected = car1;
    expect(actual).toBe(expected);
  })

})



