const {Dealership} = require("./dealership");
const {Car} = require("./car");

const car1 = new Car("BMW", 5000, "V8");
const car2 = new Car("Ferarri", 100000, "V12");
const car3 = new Car("Alpine", 50000, "I4");
const car4 = new Car("Peugeot", 500, "I4");
const car5 = new Car("Audi", 150000, "V10");

const dealership1 = new Dealership("HansineGregThinesan Dealership", 6, [car1, car2, car3, car4, car5]);

describe("car properties access", () => {

  test("can access dealership name", () => {
    const expected = "HansineGregThinesan Dealership";
    const actual = dealership1.name;
    expect(actual).toBe(expected);
  })

  test("can access dealership maxNumOfCars", () => {
    const expected = 6;
    const actual = dealership1.maxNumOfCars;
    expect(actual).toBe(expected);
  })

})

describe("Dealership prototype methods", () => {

  test("can count cars", () => {
    const expected = 5;
    const actual = dealership1.countCars();
    expect(actual).toBe(expected);
  })

  const car6 = new Car("Audi", 10000, "I4");

  test("can add cars", () => {
    dealership1.addCar(car6);
    const expected = car6;
    const actual = dealership1.carsInStock[5];
    expect(actual).toBe(expected);
  })

  test("throws error if at max capacity", () => {
    const car7 = new Car("Toyota Supra", 70000, "I6");
    const expected = "Sorry, the dealership is at max capacity right now, please sell a car first.";
    try {
      dealership1.addCar(car7);
    } catch(error) {
      expect(error.message).toBe(expected);
    }
  })

  test("can list all car manufacturers", () => {
    const expected = new Set(["BMW", "Ferarri", "Alpine", "Peugeot", "Audi"]);
    const actual = dealership1.listCarManufacturers();
    expect(actual).toEqual(expected);
  })

  test("can find the total value of all cars in stock", () => {
    const expected = 315500;
    const actual = dealership1.getTotalValueOfCars();
    expect(actual).toBe(expected);
  })

  test("can filter by manufacturer", () => {
    const manufacturerCallback = (manufacturer) => {
      return this.carsInStock.filter(car => car.manufacturer === manufacturer);
    }
    const expected = [car5, car6];
    const actual = dealership1.filterBy("Audi", manufacturerCallback);
    expect(actual).toEqual(expected);
  })

  // test("can filter by engineType", () => {
  //   const expected = [car5, car6];
  //   const actual = dealership1.filterBy("I4", engineTypeCallback);
  //   expect(actual).toEqual(expected);
  // })

  test("can filter below price", () => {
    const priceCallback = (price) => {
      return this.carsInStock.filter(car => car.price <= price);
    }
    const expected = [car4];
    const actual = dealership1.filterBy(600, priceCallback);
    expect(actual).toEqual(expected);
  })
  
})