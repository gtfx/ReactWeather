var names = ['Leonid', 'Yulia', 'Victor'];


names.forEach(function(name) {
    console.log('forEach', name);
});

names.forEach((name) => {
    console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Leonid'));

var person = {
    name: 'Leonid',
    greet: function() {
        names.forEach((name) => {
            console.log(this.name + ' syas hi to ' + name)
        });
    }
};

function add(a, b) {
    return a + b;
}


// addStatement
var addStatement = (a, b) => {
    return a + b;
}

var addExpression = (a, b) => a + b;


console.log(addExpression(4, 7));
console.log(addExpression(9, 0));


// console.log(add(1, 3));
// console.log(add(9, 0));