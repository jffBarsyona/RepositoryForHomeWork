class Car {
    constructor(brand, model, fuelConsumption, price) {
      this.brand = brand;
      this.model = model;
      this.fuelConsumption = fuelConsumption;
      this.price = price;
    }
  }
  
  class Sedan extends Car {
    constructor(brand, model, fuelConsumption, price, numberOfSeats) {
      super(brand, model, fuelConsumption, price);
      this.numberOfSeats = numberOfSeats;
    }
  }
  
  class SUV extends Car {
    constructor(brand, model, fuelConsumption, price, offRoadCapability) {
      super(brand, model, fuelConsumption, price);
      this.offRoadCapability = offRoadCapability;
    }
  }
  
  module.exports = { Car, Sedan, SUV };