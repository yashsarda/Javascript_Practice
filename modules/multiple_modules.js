const modules = {};
const require = function(moduleName) {
    return modules[moduleName];
};

modules["stats.js"] = (function() {
    let exports = {};
    const sum = (x, y) => x + y;
    const square = x => x * x;

    exports.mean = function(data) {
        return data.reduce(sum) / data.length;
    };

    exports.stddev = function(data) {
        let m = exports.mean(data);
        return Math.sqrt(
            data.map(x => x - m).map(square).reduce(sum) / (data.length - 1)
        );
    };

    return exports;
}());

// A primer on how the node require() function works.
// In a simplisitic manner this is how a lot of code bundling tools such as webpack work
const stats = require("stats.js");
console.log(stats.stddev([10, 20, 30]));