function myContacts(array) {
    var workPhone = '';

    for (var i = 0; i < array.length; i++) {
        if (array[i].gender === 'male') {
            workPhone += array[i].workphone;
        }
        if (i !== array.length -1) {
            workPhone += ' ';
        }
    }
    return workPhone;
}

function addressLouisa(array) {
    var address = '';

    for (var i = 0; i < array.length; i++) {
        if (array[i].firstName === 'Louisa' && array[i].lastName === 'Janssen') {
            address += array[i].address1 + ' ' + array[i].address2;
        }
    }
    return address;
}

var output = [{
    firstName : 'Jorge',
    lastName : 'Aguirre',
    phone: '4257537777',
    address1: 'Maple Lane',
    address2: 'APT 120',
    gender: 'male',
    workphone: '3456239090'
},
{
    firstName : 'Louisa',
    lastName : 'Janssen',
    phone: '5674328979',
    address1: 'Hunter Ave',
    address2: 'Suite 310',
    gender: 'female',
    workphone: '0908764343'
},
{
    firstName : 'Stan',
    lastName : 'Moore',
    phone: '8765674321',
    address1: 'Groove Ave',
    address2: 'Bldg 3',
    gender: 'male',
    workphone: '1230987654'
}]

console.log(myContacts(output));
console.log(addressLouisa(output));