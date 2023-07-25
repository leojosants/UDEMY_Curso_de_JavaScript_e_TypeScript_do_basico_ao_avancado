/* eslint-disable @typescript-eslint/no-namespace */
var MyNamespace0;
(function (MyNamespace0) {
    MyNamespace0.name = 'leonardo';
    var PersonNamespace = /** @class */ (function () {
        function PersonNamespace(
        // eslint-disable-next-line no-unused-vars
        name) {
            this.name = name;
        }
        return PersonNamespace;
    }());
    MyNamespace0.PersonNamespace = PersonNamespace;
    var person0 = new PersonNamespace('João');
    console.log(person0);
    var OtherNamespace;
    (function (OtherNamespace) {
        OtherNamespace.name = 'Joana';
    })(OtherNamespace = MyNamespace0.OtherNamespace || (MyNamespace0.OtherNamespace = {}));
})(MyNamespace0 || (MyNamespace0 = {}));
var person1 = new MyNamespace0.PersonNamespace('Mara');
console.log(person1);
console.log(MyNamespace0.name);
console.log(MyNamespace0.OtherNamespace.name);
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="modulo/module.ts"/>
console.log(MyNamespace0.name);
console.log(person1);
