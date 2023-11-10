//it('sem teste, ainda', () => { })

//const getSomething = callback => {
 //       setTimeout(() => {
 //       callback(12);
 //   }, 1000)
//}

//const system = () => {
 //   console.log('init');
 //    getSomething(some => {
 //    console.log(`Somenthing is ${some}`)
     //Outra forma de interpolar
    //console.log("Somenthing is " + something);
 //       console.log('end');
//})
//}

it('sem teste, ainda', () => { })

const getSomething = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(13);
            }, 1000)
        }) 

}

const system = () => {
    console.log('init');
    getSomething().then(some => {
 //   const prom = getSomething()
 //   prom.then(some => {
        console.log(`Somenthing is ${some}`)
    })
           
     //Outra forma de interpolar
    //console.log("Somenthing is " + something);
        console.log('end');

}

system();

it('sem teste, ainda', () => { })

const getSomethingg = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(13);
            }, 1000)
        }) 

}

const systemm = async() => {
    console.log('init');
    const some = await  getSomethingg()
    console.log(`Somenthing is ${some}`)
    console.log('end')        

}

systemm();