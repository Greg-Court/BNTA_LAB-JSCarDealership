const Customer = function(name, wallet, car) {
  this.name = name;
  this.wallet = wallet;
  this.car = null;
}

Customer.prototype.buyCar = function(dealership, carIndex) { 
  let car = dealership.carsInStock[carIndex];
  if (car.price <= this.wallet) {
    dealership.carsInStock.splice(carIndex,1);
    this.car = car;
    this.wallet -= car.price;
  } else throw new Error("No money no car g");
}


module.exports = {Customer}; 
