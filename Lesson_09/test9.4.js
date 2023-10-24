function insertData(arr, dataToInsert, position) {
    return arr.slice(0, position).concat(dataToInsert, arr.slice(position));
}

const currentArray = [1, 2, 3, 4, 5];
const dataToInsert = ['a', 'b', 'c'];
const positionToInsert = 3;

const newArr = insertData(currentArray, dataToInsert, positionToInsert);
console.log(newArr);
