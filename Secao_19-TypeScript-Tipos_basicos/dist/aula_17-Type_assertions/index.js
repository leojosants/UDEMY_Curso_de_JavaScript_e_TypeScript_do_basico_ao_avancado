"use strict";
/* RECOMENDADO */
// Condicional
var body1 = document.querySelector('body');
if (body1)
    body1.style.background = 'red';
/* RECOMENDADO */
// Type assertion
var body3 = document.querySelector('body');
body3.style.background = 'red';
/* RECOMENDADO */
// HTMLElement
var input = document.querySelector('.input');
input.value = 'Qualquer coisa';
input.focus();
/* NÃO RECOMENDADO */
// Non-null assertion
var body2 = document.querySelector('body');
body2.style.background = 'red';
/* NÃO RECOMENDADO */
var body4 = document.querySelector('body');
