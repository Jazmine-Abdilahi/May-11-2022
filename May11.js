/* VIDEO 114 */

/* MAY 12 2022 */



orderPizza(mainIngredient, ...otherIngredients); {
    console.log(mainIngredient);
    console.log(otherIngredient);
};

const properties = Object.keys(openingHours);
console.log(properties)

console.log(`We are open on ${properties.length} days`);

for (const day of properties) {
    console.log(day);
}

const values = Object.values(openingHours);
console.log(values);

//
Object.entries(openingHours);

let openStr = `we are open pn ${`properties.length`}; days:`;
for (const days of properties) {
    openStr += `${day},`;
}
console.log(openStr);

// Property values
const values = Object.entries(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

for ( const {key, } of entries) {
    console.log(`On ${keys} we open at ${open} and close at ${close}`)
};