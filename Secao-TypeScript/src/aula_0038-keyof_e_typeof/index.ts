type ColorsObj = typeof colorsObj;
type ColorsKeys = keyof ColorsObj;

const colorsObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
}

function translateColor(color: ColorsKeys, colors: ColorsObj): string {
  return colors[color];
}

console.log(translateColor('vermelho', colorsObj));
console.log(translateColor('verde', colorsObj));
console.log(translateColor('azul', colorsObj));
console.log(translateColor('roxo', colorsObj));
