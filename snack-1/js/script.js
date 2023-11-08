const bikes = [
    {
        name: "First Bike",
        weight: 20,
    },
    {
        name: "Second Bike",
        weight: 64,
    },
    {
        name: "Third Bike",
        weight: 42,
    }
]
//console.log(bikes);


const [lightest, heaviest, middle] = bikes; 
//console.log(lightest, heaviest, middle);

console.log(lightest);

const text = document.getElementById("bike-text");

text.innerHTML += `The lightest bike is the bike named ${lightest.name}; its weight is ${lightest.weight} Kilograms.`

