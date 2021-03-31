function test(num1, num2) {
    for (var j = 0; j < arguments.length; j++) {
        if (isNaN(arguments[j])) {
            return 0;
        }

    }
    if (arguments.length < 2) {
        return 0;
    } else if (arguments.length == 2)
        return (num1 + num2);

    else if (arguments.length > 2) {
        var sum1 = arguments[0] + arguments[1];
        var sum2 = 0;
        for (let i = 2; i < arguments.length; i++) {
            sum2 = sum2 + arguments[i];
        }
        if (sum1 - sum2 > 0) {
            return (sum1 - sum2);
        } else
            return Math.abs(sum1 - sum2);
    }
}

console.log(test(1, 4, 5, 3));