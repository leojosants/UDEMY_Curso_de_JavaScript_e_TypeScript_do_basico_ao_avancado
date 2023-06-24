/*
    https://blog.dbins.com.br/como-funciona-a-logica-da-validacao-do-cpf

    CPF: 705.484.450-52

    - O CPF possui 2 digitos verificadores, que são os 2 últimos dígitos, que servem para validar os demais dígitos.

    -> Cálculo do primeiro dígito verificador:
        - O primeiro dígito verificador é o "5" (posição 10) e o segundo é o "2" (posição 11).
        - A primeira validação é multiplicar cada número base em separado, começando com 10 e terminando com 2.
            
            |  7 | 0 |  5 |  4 |  8 |  4 |  4 |  5 | 0 |
            |  x | x |  x |  x |  x |  x |  x |  x | x |
            | 10 | 9 |  8 |  7 |  6 |  5 |  4 |  3 | 2 |
            | 70 | 0 | 40 | 28 | 48 | 20 | 16 | 15 | 0 | --> Soma: 237
            
        - Depois, se divide o resultado por 11 e pegar o resto: (237 % 11) --> Resto: 6
        - REGRA 1: Se o resto for 0 ou 1, então o primeiro dígito verificador é igual a 0.
        - REGRA 2: Se o resto for 2, 3, 4, 5, 6, 7, 8, 9 ou 10, então o primeiro dígito verificador é a diferença entre o número 11 e o resto da divisão por 11 --> RESULTADO DO PRIMEIRO DIGITO: 11 - 6 = 5

    -> Cálculo do segundo dígito verificador:
        - A segunda validação é multiplicar cada número base em separado, junto com o primeiro dígito verificador, começando com 11 e terminando com 2.

            |  7 |  0 |  5 |  4 |  8 |  4 |  4 |  5 | 0 |  5 |
            |  x |  x |  x |  x |  x |  x |  x |  x | x |  x |
            | 11 | 10 |  9 |  8 |  7 |  6 |  5 |  4 | 3 |  2 |
            | 77 |  0 | 45 | 32 | 56 | 24 | 20 | 20 | 0 | 10 | --> Soma: 284

        - Depois, se divide o resultado por 11 e pegar o resto: (284 % 11) --> Resto: 9
        - REGRA 1: Se o resto for 0 ou 1, então o primeiro dígito verificador é igual a 0.
        - REGRA 2: Se o resto for 2, 3, 4, 5, 6, 7, 8, 9 ou 10, então o segundo dígito verificador é a diferença entre o número 11 e o resto da divisão por 11 --> RESULTADO DO SEGUNDO DIGITO: 11 - 9 = 2
*/