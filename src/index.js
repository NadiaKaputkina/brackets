module.exports = function check(str, bracketsConfig) {
    let strBrackets = str;

    for (let start = 0, i = start; i < strBrackets.length; i = start++) {

        for (let item of bracketsConfig) {
            if (strBrackets[i] === item[0]) {
                if (strBrackets[i + 1] === item[1]) {
                    strBrackets = `${strBrackets.slice(0, i)}${strBrackets.slice(i + 2)}`;
                    start = 0;
                } else {
                    break;
                }
            }
        }
    }

    if (!strBrackets.length) return true;
    return false;
}
