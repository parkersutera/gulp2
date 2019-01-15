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
var max = 10;

for (var i = 0;i < max; i++){
    console.log(i);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzZWNvbmRhcnktc2NyaXB0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGVyc29uIHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuICAgIGhlbGxvKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMubmFtZSA9PT0gJ3N0cmluZycpe1xuICAgICAgICAgICAgcmV0dXJuICdIZWxsbyBJIGFtICcgKyB0aGlzLm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJoZWxsb1wiO1xuICAgICAgICB9XG4gICAgfVxufVxudmFyIHBlcnNvbiA9IG5ldyBQZXJzb24oJ1BhcmtlcicpO1xuLy8gZG9jdW1lbnQud3JpdGUocGVyc29uLmhlbGxvKCkpO1xuLy8gdmFyIG5hbWUgPSAnUGFya2VyJztcbnZhciBncmVldEhUTUwgPSB0ZW1wbGF0ZXNbJ2dyZWV0aW5nJ10oe1xuICAgIG1lc3NhZ2U6IHBlcnNvbi5oZWxsbygpXG59KVxuZG9jdW1lbnQud3JpdGUoZ3JlZXRIVE1MKTtcbi8vIGRvY3VtZW50LndyaXRlKCdIZWxsbyAnICsgbmFtZSk7IiwidmFyIG1heCA9IDEwO1xuXG5mb3IgKHZhciBpID0gMDtpIDwgbWF4OyBpKyspe1xuICAgIGNvbnNvbGUubG9nKGkpO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
