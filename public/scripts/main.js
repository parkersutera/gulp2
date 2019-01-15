class Person {
    constructor (name){
        this.name = name;
    }
    hello() {
        if (typeof this.name === 'string'){
            return 'Hello I am ' + this.name;
        }
        else {
            return "hello";
        }
    }
}
var person = new Person('Parker');
// document.write(person.hello());
// var name = 'Parker';
var greetHTML = templates['greeting']({
    message: person.hello()
})
document.write(greetHTML);
// document.write('Hello ' + name);