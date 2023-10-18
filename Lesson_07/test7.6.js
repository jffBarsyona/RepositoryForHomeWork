function removeDuplicates(arr) {
    const uniqueArray = Array.from(new Set(arr));
    return uniqueArray;
}

const classes = ['warrior', 'druid', 'mage', 'monk', 'rogue', 'monk', 'druid', 'warlock', 'monk'];
const uniqueClasses = removeDuplicates(classes);

console.log(uniqueClasses);
