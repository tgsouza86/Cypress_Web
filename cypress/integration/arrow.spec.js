it('nada agora', function() { })

//function soma(a, b) {
//    return a + b;
//}

 //  const soma = function (a, b) {
 //       return a + b
 //   }

// const soma = (a, b) => {
//     return a + b
 //}

// Erro comun, como não fazer 
//const soma = (a, b) => {
//   a + b
// }

//      metodo certo com return
//     const soma = (a, b) => {
//       return a + b
//    }

// metodo certo sem return Arrow
 // const soma = (a, b) => a + b

 // Arrow So fica sem parametro, quando tenho apenas um parametro apenas
 //const soma = (a) => a + a

 // Arrow sem parametro, fica apenas com o parentreses 
 const soma = () => 5 + 5
console.log(soma(1, 4))

it('a function test...', function() {
    console.log('Function', this)
})


/// Quando usa o this, não usa a arrow 
it('an arrow test...', () => {
    console.log('Function', this)
})