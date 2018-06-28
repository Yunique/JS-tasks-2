function cook(pans, pancake) {
    return (Math.ceil(pancake * 2 / pans) + ' minutes(iterations)');
}

console.log(cook(2, 3));