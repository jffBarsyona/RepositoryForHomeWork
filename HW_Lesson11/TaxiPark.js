const { Car, Sedan, SUV } = require('./Car');

class TaxiPark {
  constructor() {
    this.cars = [];
  }

  addCar(car) {
    this.cars.push(car);
  }

  calculateTotalCost() {
    return this.cars.reduce((total, car) => total + car.price, 0);
  }

  sortByFuelConsumption() {
    this.cars.sort((a, b) => a.fuelConsumption - b.fuelConsumption);
  }

  findCarsByParameters(minFuelConsumption, maxFuelConsumption, minPrice, maxPrice) {
    return this.cars.filter(
      (car) =>
        car.fuelConsumption >= minFuelConsumption &&
        car.fuelConsumption <= maxFuelConsumption &&
        car.price >= minPrice &&
        car.price <= maxPrice
    );
  }
}

module.exports = TaxiPark;