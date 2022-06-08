function roll(rolls, sides){
    let i = 0;
    let total = 0;
    let current;
    while (i < rolls){
        current = Math.floor(Math.random() * sides + 1);
        total += current;
        i++;
    }
    return total;
}

function d20(num){
    return roll(num, 20);
}


function statRoll(){


    let x = 0;
    let stats = [];
    while (x < 6){
        let i = 0;
        let eachRoll = [];
        while (i < 4){
            eachRoll[i] = Math.floor(Math.random() * 6 + 1);
            i++;
        }
        console.log(eachRoll);
        eachRoll.sort().shift();
        console.log(eachRoll);
        let n = 0;
        let singleStat = 0;
        while (n < eachRoll.length){
            singleStat += eachRoll[n];
            n++;
        }
        console.log(singleStat);
        stats[x] = singleStat;
        x++;
    }
    console.log(stats);

    document.querySelector('.strStat').innerHTML = stats[0];
    document.querySelector('.strMod').innerHTML = Math.floor(parseFloat(document.querySelector('.strStat').innerHTML) / 2 -5);

    document.querySelector('.dexStat').innerHTML = stats[1];
    document.querySelector('.dexMod').innerHTML = Math.floor(parseFloat(document.querySelector('.dexStat').innerHTML) / 2 -5);

    document.querySelector('.conStat').innerHTML = stats[2];
    document.querySelector('.conMod').innerHTML = Math.floor(parseFloat(document.querySelector('.conStat').innerHTML) / 2 -5);

    document.querySelector('.intStat').innerHTML = stats[3];
    document.querySelector('.intMod').innerHTML = Math.floor(parseFloat(document.querySelector('.intStat').innerHTML) / 2 -5);

    document.querySelector('.wisStat').innerHTML = stats[4];
    document.querySelector('.wisMod').innerHTML = Math.floor(parseFloat(document.querySelector('.wisStat').innerHTML) / 2 -5);

    document.querySelector('.chaStat').innerHTML = stats[5];
    document.querySelector('.chaMod').innerHTML = Math.floor(parseFloat(document.querySelector('.chaStat').innerHTML) / 2 -5);
}

console.log(parseFloat(document.querySelector('.strMod').innerHTML))

document.querySelector('.strMod').innerHTML = Math.floor(parseFloat(document.querySelector('.strStat').innerHTML) / 2 -5);
document.querySelector('.dexMod').innerHTML = Math.floor(parseFloat(document.querySelector('.dexStat').innerHTML) / 2 -5);
document.querySelector('.conMod').innerHTML = Math.floor(parseFloat(document.querySelector('.conStat').innerHTML) / 2 -5);
document.querySelector('.intMod').innerHTML = Math.floor(parseFloat(document.querySelector('.intStat').innerHTML) / 2 -5);
document.querySelector('.wisMod').innerHTML = Math.floor(parseFloat(document.querySelector('.wisStat').innerHTML) / 2 -5);
document.querySelector('.chaMod').innerHTML = Math.floor(parseFloat(document.querySelector('.chaStat').innerHTML) / 2 -5);

document.querySelector('.rollStats').onclick = statRoll;

function charName(){
    charName = prompt('what is your name?')
    document.querySelector('.name').innerHTML = charName;
}

document.querySelector('.name').onclick = charName();