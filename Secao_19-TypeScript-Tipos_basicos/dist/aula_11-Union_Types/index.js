"use strict";
function exemplo_01() {
    function addOrConcat(a, b) {
        if (typeof a === 'number' && typeof b === 'number')
            return a + b;
        return "" + a + b;
    }
    console.log(addOrConcat(2, 3));
    console.log(addOrConcat('2', '3'));
    console.log(addOrConcat(2, '3'));
    console.log(addOrConcat('2', 3));
}
;
exemplo_01();
