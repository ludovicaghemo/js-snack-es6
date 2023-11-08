/*Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.*/
const footballTeams = [
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Toro",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0,
    },
]
//console.log(footballTeams);

/*Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
+
Usando la destrutturazione creare un nuovo array i cui elementi contengano solo nomi e falli subiti e stampare tutto in console.*/
const nomeAndFalliArray = [];

footballTeams.forEach((curFootballTeam) => {    
    curFootballTeam.puntiFatti = getRndNumber(50);
    curFootballTeam.falliSubiti  = getRndNumber(50); 
    const {nome, falliSubiti} = curFootballTeam;
    const nomeFalli = {
        nome,
        falliSubiti
    };
    nomeAndFalliArray.push(nomeFalli);
})
console.log(nomeAndFalliArray);

/****************************************    
FUNCTIONS
****************************************/

/**
 * Description: genera i numeri random
 * @param {number} max
 * @returns {number} numeri casuali senza ripetizioni compresi tra 0 e max (50)
 */
function getRndNumber(max) {
    return Math.floor(Math.random() * (max - 0)) + 0;
}

