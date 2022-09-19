// const repeatString = function(string, num) {
//     let finishedString = [];
//     for (let i = 0; i < num; i++) {
//         finishedString.push(string);
//     }
//     let finalString = finishedString.concat();
// };

// repeatString('Travis', 3);

function repeatString(string, num) {
    let stringBin = [];
    let positiveOrNegative = Math.sign(num);
    if (positiveOrNegative === -1) {
        stringBin.push('ERROR');
        let errorString = stringBin.toString();
        return errorString;
    } else {
        for (let i = 0; i < num; i++) {
            stringBin.push(string);
        }
        let finishedString = stringBin.join('');
        return finishedString;
    }
}

// function repeatString(string, num) {
//     let stringBin = [];
//     for (let i = 0; i < num; i++) {
//         stringBin.push(string);
//     }
//     let finishedString = stringBin.join('');
//     return finishedString;
// }

console.log(repeatString('hey', 3));

// Do not edit below this line
module.exports = repeatString;
