//SNACK 1

const bike = [
    {
        nome: 'COLNAGO',
        peso: 15
    },
    {
        nome: 'TREK',
        peso: 18
    },
    {
        nome: 'PINARELLO',
        peso: 17 
    },
    {
        nome: 'VanRysel',
        peso: 5
    },
    {
        nome: 'LOBITO RV08',
        peso: 8
    }
]



bike.forEach((elem) => {
    let {peso} = elem;
    if (peso <= 10) {
        console.log(elem);
    }
})
 

