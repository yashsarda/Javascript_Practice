// This is how we could define a stats module
const stats = (function() {

    // Utility functions private to the module.
    // Since this is a IIFE these varibales will only be avaibale till the
    // functions executes. Once the execution context gets destroyed these functions
    // get destoryed with them

    const sum = (x, y) => x + y;
    const square = x => x * x;

    function mean(data) {
        return data.reduce(sum) / data.length;
    }

    function stddev(data) {
        let m = mean(data);

        return Math.sqrt(
            data.map(x => x - m).map(square).reduce(sum) / (data.length - 1)
        );
    }

    // Export the mean and the stddev functions
    // This will have access to sum and the square functions due to closures
    return {
        mean,
        stddev
    };

}());

console.log(stats.mean([1, 3, 5, 7, 9]));
console.log(stats.stddev([1, 3, 5, 7, 9]));