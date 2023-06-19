let umaString = 'Lorem ipsum';

console.log(`umaString = ${umaString}`);

umaString = 'Lorem \"ipsum\"';

console.log(`umaString = ${umaString}`);

umaString = 'Lorem \\ipsum\"';

console.log(`umaString = ${umaString}`);

console.log(`umaString.indexOf('sit') = ${umaString.indexOf('sit')}`);

console.log(`umaString.indexOf('m') = ${umaString.indexOf('m')}`);

console.log(`umaString.indexOf('o', 4) = ${umaString.indexOf('o', 4)}`); // inicia a busca do começo a partir da posição passada

console.log(`umaString.lastIndexOf('o', 4) = ${umaString.lastIndexOf('o', 4)}`); // inicia a busca do fim a partir da posição passada

console.log(`umaString[4] = ${umaString[4]}`);

console.log(`umaString.charAt(7) = ${umaString.charAt(7)}`);

console.log(`umaString.concat(' "trecho concatenado"') = ${umaString.concat(' "trecho concatenado"')}`);

console.log(`umaString.match(/[a-z]/g) = ${umaString.match(/[a-z]/g)}`);

console.log(`umaString.match(/[a-z]/) = ${umaString.match(/[a-z]/)}`);

console.log(`umaString.search(/[a-z]/g) = ${umaString.search(/[a-z]/g)}`);

console.log(`umaString.search(/r/) = ${umaString.search(/r/)}`);

console.log(`umaString = ${umaString}`);

console.log(`umaString.replace('\\', '') = ${umaString.replace('\\', '')}`);

umaString = 'Lorem ipsum dOlor, sit aMet coNseCtetur adipisicing elit.';

console.log(`umaString.replace(/t/, '%') = ${umaString.replace(/i/, '%')}`);

console.log(`umaString.replace(/t/g, '%') = ${umaString.replace(/i/g, '#')}`);

console.log(`umaString.length = ${umaString.length}`);

console.log(`umaString = ${umaString}`);

console.log(`umaString.slice(2, 5) = ${umaString.slice(2, 5)}`);

console.log(`umaString = ${umaString}`);

console.log(`umaString.slice(-3) = ${umaString.slice(-3)}`);

console.log(`umaString.split('d', 2) = ${umaString.split('d', 2)}`);

console.log(`umaString = ${umaString}`);

console.log(`umaString.toLocaleLowerCase() = ${umaString.toLocaleLowerCase()}`);

console.log(`umaString = ${umaString}`);

console.log(`umaString.toUpperCase() = ${umaString.toUpperCase()}`);