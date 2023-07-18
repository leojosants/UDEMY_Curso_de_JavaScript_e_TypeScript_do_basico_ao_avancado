"use strict";
/* function exemplo_01() {

  let x: any;

  x = 100;
  x = 'Leonardo';
  x = 900;
  x = '10';

  const y: number = 800;

  console.log(x + y);

  exemplo_01();
};
*/
/* function exemplo_02() {

  let x: unknown;

  x = 100;
  x = 'Leonardo';
  x = 900;
  x = '10';

  const y: number = 800;

  console.log(x + y);

  exemplo_02();
};
*/
function exemplo_03() {
    var x;
    x = 100;
    x = 'Leonardo';
    x = 900;
    x = 10;
    var y = 800;
    if (typeof x === 'number')
        console.log(x + y);
}
;
exemplo_03();
