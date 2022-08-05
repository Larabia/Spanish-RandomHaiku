/*------------------- Declarations -------------------*/
//haiku components
const firstLine = ['test1','test2','test3'];
const secondLine = ['test1','test2','test3','test4'];
const thirdLine = ['test1','test2','test3'];


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
}