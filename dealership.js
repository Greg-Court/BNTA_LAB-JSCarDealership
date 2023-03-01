const Dealership = function(name, maxNumOfCars, carsInStock) {
  this.name = name;
  this.maxNumOfCars = maxNumOfCars;
  this.carsInStock = carsInStock;
  this.balance = 0;
}

Dealership.prototype.countCars = function() {
  return this.carsInStock.length;
}

Dealership.prototype.addCar = function(car) {
  if (this.carsInStock.length < this.maxNumOfCars) {
    this.carsInStock.push(car);
  } else {
    throw new Error("Sorry, the dealership is at max capacity right now, please sell a car first.");
  }
}

Dealership.prototype.listCarManufacturers = function() {
  return new Set(this.carsInStock.reduce((accum, car) => accum.concat(car.manufacturer), []));
}



const manufacturerCallback = (manufacturer) => {
    return this.carsInStock.filter(car => car.manufacturer === manufacturer);
}

const engineTypeCallback = (engineType) => {
    return this.carsInStock.filter(car => car.engineType === engineType);
}

const priceCallback = (price) => {
    return this.carsInStock.filter(car => car.price <= price);
}


Dealership.prototype.filterBy = function(searchQuery, callback){
    return callback(searchQuery);
}












Dealership.prototype.getTotalValueOfCars = function() {
  return this.carsInStock.reduce((accum, car) => accum + car.price, 0);
}

module.exports = {Dealership};
