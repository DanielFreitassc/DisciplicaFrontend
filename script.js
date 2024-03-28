const a = 2, b = 3;
console.log(`O resultado da operação é: ${3 % 2}`)

if(true) {
    const a = 2;
   }
   console.log(a);

console.log(2 != '2')

const age = 17;
if(age < 16) {
 console.log('Menor de idade. Não pode votar...!')
} else if(age < 18 || age >= 70) {
 console.log('Voto opcional...!')
} else {
 console.log('Voto obrigatório...!')
}

const number = 7;
switch(number){
 case 1:
 console.log('Opção 1');
 break;
 case 2:
 console.log('Opção 2');
 break;
 case 3:
 console.log('Opção 3');
 break;
 default:
 console.log('Opção inválida')
}

const myFunction = (arr) => {
    let result = [ ];
    arr.forEach((value) => {
    if(value % 2 === 0) {
    result.push(value);
    }
    })
    return result; }
   const array = [1,2,3,4,5]
   const res = myFunction(array)
   console.log(res)

   let names = ['João', 'Rodrigo', 'Ana'];
   names[1] = 'Maria'
   console.log(names[0], ' e ', names[1]);

const numbers = [ 1, 2, 3, 4]
const newNumbers = numbers.map((number) => number + 1)
console.log('newNumbers: ', newNumbers);

const names = ['Ana', 'Fernando', 'Maria', 'Pedro'];
const filtro = names.filter((name) => name.length > 5);
console.log(filtro);

let names = ['ana', 'maria', 'joão', 'pedro'];
const result = names.slice(1, 3)
console.log(result)

const aluno = {
    nome: 'Ana',
    universidade: 'Satc'
   }
   aluno.nome = 'João';
   console.log(aluno.nome)