type Documment = {
  title: string,
  text: string,
  date?: Date,
}

const documment: Documment = {
  title: 'Título',
  text: 'Texto',
  date: new Date(),
};

/*
  lado esquerdo ?? lado direito
  Lado direito somente será executado se o lado esquerdo for 'undefined' ou 'null'
*/
console.log(documment.date?.toDateString() ?? 'Não existe data!');
console.log(undefined ?? 'undefined -> Não existe data!');
console.log(null ?? 'null -> Não existe data!');
console.log(false ?? 'false-> Não existe data!');
