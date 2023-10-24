function insertData(arr, dataToInsert, positions) {
    for (let i = 0; i < dataToInsert.length; i++) {
        const position = positions[i];
        const elementsToInsert = dataToInsert[i];
        arr.splice(position, 0, elementsToInsert);
    }
    return arr;
}
const currentArray = [1, 2, 3, 4, 5];
const dataToInsert = ['a', 'b', 'c', 'e'];
const positionsToInsert = [1, 2, 6, 8];

const newArr = insertData(currentArray, dataToInsert, positionsToInsert);
console.log(newArr);
