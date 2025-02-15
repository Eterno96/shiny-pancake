const input = [5, -3, 20, 7, 0.5];

function aggregate (arr) {
    console.log('Sum = ', reducer(arr, (a, b) => a + b, 0));
    console.log('Min = ', reducer(arr, (a, b) => a < b ? a : b, Number.MAX_SAFE_INTEGER));
    console.log('Max = ', reducer(arr, (a, b) => a > b ? a : b, Number.MIN_SAFE_INTEGER));
    console.log('Product = ', reducer(arr, (a, b) => a * b, 1));
    console.log('Join = ', reducer(arr, (a,b) => `${a}${b}`, '')); 
}

function reducer (arr, operation, initial){
    let result = initial;

    for(let element of arr) {
        result = operation(result, element);
    }

    return result;
}

aggregate(input);
