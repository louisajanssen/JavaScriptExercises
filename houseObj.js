function houseObj(array) {
    var biggestHouse = array[0].sqft;
    var worth = 0;
    var seaSum = 0;
    var seaTotal = 0;
    var avg = 0;
    var overMillion = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i].sqft > biggestHouse) {
            biggestHouse = array[i].sqft
        }
         worth += array[i].price;
        
        if (array[i].price > 1000000) {
            overMillion++;
        }
        if (array[i].city === 'Seattle') {
            seaSum += array[i].price;
            seaTotal++;
        }
    }

    avg = seaSum / seaTotal;

    var newObj = {
        biggest: biggestHouse,
        totalWorth: worth,
        seattleAvg: avg,
        million: overMillion
    }

    return newObj;
}

var output = [{
    city: 'Seattle',
    price: 950000,
    sqft: 2500,
    street: 'Christmas Lane'
},
{
    city: 'Bellevue',
    price: 1200000,
    sqft: 3500,
    street: 'The Street'
},
{
    city: 'Seattle',
    price: 650000,
    sqft: 1200,
    street: 'Brooks Lane'
},
{
    city: 'Kirkland',
    price: 1000000,
    sqft: 2700,
    street: 'Molly Ave'
},
{
    city: 'Seattle',
    price: 3500000,
    sqft: 6000,
    street: 'Medina Ave'
}]

console.log(houseObj(output));