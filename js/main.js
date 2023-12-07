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

let bici_leggera = bike[0];

bike.forEach((elem) => {
    let {peso} = elem;
    if (elem.peso < bici_leggera.peso) {
        bici_leggera = elem;
    }
})

let {nome , peso} = bici_leggera;

let text =`la bici più leeggera è ${nome} e pesa ${peso}`;
console.log(text);
//SNACK 2

const footballteam = [
    {
        name : 'Juventus',
        point : 0,
        fouls : 0
    },
    {
        name : 'Inter',
        point : 0,
        fouls : 0
    },
    {
        name : 'Milan',
        point : 0,
        fouls : 0
    },
    {
        name : 'Napoli',
        point : 0,
        fouls : 0
    },
    {
        name : 'Roma',
        point : 0,
        fouls : 0
    },
];

console.log(footballteam);
footballteam.forEach((elem) => {
    elem.point = Math.floor(Math.random()*40 + 1);
    elem.fouls = Math.floor(Math.random() * 10 + 1);
    
})

let teams_fouls = footballteam.map(({name , fouls}) => 
 ({name, fouls}));
console.log(teams_fouls);

