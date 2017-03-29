// function getTempCallback(location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }

// getTempCallback('Philadelphia', function(err, temp) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp);
                
//     }
// });


// function getTempPromise(location) {
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve(79);
//             reject('City not found');
//         }, 1000);
//     });
// }

// getTempPromise('Phila').then(function(temp) {
//         console.log('promise success', temp);
//     }, function(err) {
//         console.log('promise error', err);
// })
if (typeof 7 === 'number') {

}

function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject("Not a number");
        }
    });
}

addPromise(35, 30).then(function(result){
    console.log('Success', result);
}, function(error) {
    console.log('Error', error)
});

addPromise(35, 10).then(function(result){
    console.log('Success', result);
}, function(error) {
    console.log('Error', error)
});

addPromise(35, 'leonid').then(function(result){
    console.log('Success', result);
}, function(error) {
    console.log('Error', error)
});

