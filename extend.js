const extend = createAssigner(allKeys);

function createAssigner(keyFunc) {

    return function(obj) {

        var length = arguments.length;

        if (length < 2 || obj === null) return obj;

        for (let index = 1; index < length; index++) {
            var source = arguments[index],
                keys = keyFunc(source),
                l = keys.length;
            
            for (let i = 0; i < l; ++i) {
                var key = keys[i];
                if(obj[key] === void 0) obj[key] = source[key];
            }
        }

        return obj;
    };
}

function allKeys(obj) {
    if(!isObject(obj)) return [];

    let keys = [];
    for (let key in obj) {
        keys.push(key);
    }
    return keys;
}

function isObject(obj) {
    let type = typeof obj;

    return type === "function" || type === "object" && !!obj;
}

const yash = {
    firstName: 'Yash'
};

const vaishnavi = {
    lastName: 'Sarda',
    relationship: 'Sister'
};

extend(yash, vaishnavi);