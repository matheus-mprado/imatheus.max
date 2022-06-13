function required() {
    throw new Error('Required param');
}

function showName(name = required()) {
    console.log(name)
}

showName('Matheus') //Matheus
showName() //Uncaught Error: Required Param