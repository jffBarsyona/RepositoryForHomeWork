const { Sedan, SUV } = require('./Car');
const TaxiPark = require('./TaxiPark');

const taxiPark = new TaxiPark();

const sedan1 = new Sedan('Toyota', 'Camry', 8.4, 25000, 5);
const sedan2 = new Sedan('Honda', 'Civic', 7, 28000, 4);

const suv1 = new SUV('Jeep', 'Grand Cherokee', 10, 39999, true);
const suv2 = new SUV('Ford', 'Explorer', 11, 35000, true);

taxiPark.addCar(sedan1);
taxiPark.addCar(sedan2);
taxiPark.addCar(suv1);
taxiPark.addCar(suv2);

console.log('Итоговая стоимость таксопарка:', taxiPark.calculateTotalCost());

console.log('Автомобили по расходу топлива:');
taxiPark.sortByFuelConsumption();
console.log(taxiPark.cars);

const filteredCars = taxiPark.findCarsByParameters(8, 10, 32000, 40000);
console.log('Автомобили по заданным параметрам:');
console.log(filteredCars);