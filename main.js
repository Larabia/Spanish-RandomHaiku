/*------------------- Declarations -------------------*/
//haiku components
const firstLine = ['Nadie que vaya','«Ven, ven», le dije,','Noche corta de verano:', 'Abriendo los picos,','Andando con sus patitas mojadas,','el agua se cristaliza','La flor de loto','Blancos los rostros','Un ruido','Una mujer sola.','Entre las hojas de té'];
const secondLine = ['por este camino.','pero la luciérnaga','entre los juncos, fluyendo,','los pajaritos esperan a su madre:','el gorrión','las luciérnagas se apagan','Sus hojas y las marchitas','Que observan','Cavan una fosa','Se despierta y mira','puestas a secar,'];
const thirdLine = ['Crepúsculo de otoño','tse fue volando','la espuma de los cangrejos.','la lluvia de otoño','por la terraza de madera','nada existe','Flotando en el agua','El arco iris.','Detrás de las camelias','la caja de las luciérnagas','solo un sendero.'];


/*---------------------- Main ------------------------*/

//prints the three lines of a random haiku
console.log(firstLine[getRandomIndex(getMaxNumber(firstLine))]);
console.log(secondLine[getRandomIndex(getMaxNumber(secondLine))]);
console.log(thirdLine[getRandomIndex(getMaxNumber(thirdLine))]);


/*-------------------- Functions --------------------*/

//generates a max num for de random index based on the array length
//so the program can scale if you add more haiku components 
function getMaxNumber(array){
    let maxNum = array.length;
    return maxNum;
}

//generates a random number / pass in a max number as a parameter
function getRandomIndex(maxNum){
    let randomIndex = Math.floor(Math.random() * maxNum); 
    return randomIndex;
<<<<<<< HEAD
}
=======
}
>>>>>>> 8e2250a773a260f999f5b1fdc10fd2f028a46124
