const person = {
    firstname: 'Yash',
    lastname: 'Sarda',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
};

const logName = function(language1, language2) {

    console.log(`Logged: ${this.getFullName()}`);
    console.log(`Arguments: ${language1} ${language2}`);
    console.log(`------------------------`);
};

// A copy of the function is created with the this varibale pointing to the person object
const logFullName = logName.bind(person);
console.log(logFullName());
console.log(logName.call(person, 'en', 'es'));
console.log(logName.apply(person, ['en', 'es']));

// Function borrowing
const person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
};

console.log(person.getFullName.call(person2));