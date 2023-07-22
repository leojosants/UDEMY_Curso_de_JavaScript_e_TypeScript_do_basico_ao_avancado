"use strict";
/* Recommended */
// Conditional
const body1 = document.querySelector('body');
if (body1)
    body1.style.background = 'red';
/* Recommended */
// Type assertion
const body3 = document.querySelector('body');
body3.style.background = 'red';
/* Recommended */
const input = document.querySelector('.input');
input.value = 'Qualquer coisa';
input.focus();
/* Not recommended */
// Non-null assertion (!)
const body2 = document.querySelector('body');
body2.style.background = 'red';
/* Not recommended */
// Type assertion
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const body4 = document.querySelector('body');
