/*
    Prototype é um framework de código aberto em JavaScript, utilizado para o auxílio no desenvolvimento de aplicações Web. As principais características do Prototype são o fato dele ser muito bem estruturado, modular e orientado a objetos. Outro fato marcante é o excelente suporte ao Ajax.
*/

// (function () {

exampleOne = () => {

    // Construtora -> mode (classe)
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.fullname = () => `${this.name} ${this.surname}`;
    }

    // Instância
    const personOne = new Person('Leonardo', 'Santos');
    const personTwo = new Person('Elisabeth', 'Sales');

    console.dir(personOne);
    console.dir(personTwo);

    exampleOne();
};

// function exampleTwo() {

// Construtora -> mode (classe)
function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    // this.fullName = () => 'ORIGINAL: ' + this.name + ' ' + this.surname;
}

Person.prototype.FullName = function () { return this.name + ' ' + this.surname; };

// Instância
const personOne = new Person('Leonardo', 'Santos');
const personTwo = new Person('Graziel', 'Oliveira');
const date = new Date();

console.dir(personOne);
console.dir(date);

// }; exampleTwo();

// })();