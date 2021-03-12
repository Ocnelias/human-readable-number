module.exports = function toReadable(number) {

    let period1 = {};
    period1[0] = '';
    period1[1] = 'one';
    period1[2] = 'two';
    period1[3] = 'three';
    period1[4] = 'four';
    period1[5] = 'five';
    period1[6] = 'six';
    period1[7] = 'seven';
    period1[8] = 'eight';
    period1[9] = 'nine';

    let period2 = {};
    period2[0] = 'ten';
    period2[1] = 'eleven';
    period2[2] = 'twelve';
    period2[3] = 'thirteen';
    period2[4] = 'fourteen';
    period2[5] = 'fifteen';
    period2[6] = 'sixteen';
    period2[7] = 'seventeen';
    period2[8] = 'eighteen';
    period2[9] = 'nineteen';

    let period3 = {};
    period3[0] = '';
    period3[1] = '';
    period3[2] = 'twenty';
    period3[3] = 'thirty';
    period3[4] = 'forty';
    period3[5] = 'fifty';
    period3[6] = 'sixty';
    period3[7] = 'seventy';
    period3[8] = 'eighty';
    period3[9] = 'ninety';

    let result = [];

    numberArr = number.toString().split('');

    if (numberArr.length === 1) {
        if (numberArr[0] == 0) {
            result[1] = 'zero';
        } else {
            result[1] = period1[numberArr[0]];
        }
    } else if (numberArr.length === 2) {
        result[1] = period3[numberArr[0]];
        if (numberArr[0] == 1) {
            result[2] = ' ' + period2[numberArr[1]];
        } else {
            result[2] = ' ' + period1[numberArr[1]];
        }
    } else {
        result[1] = period1[numberArr[0]] + ' hundred ';
        if (numberArr[1] == 0) {
            result[2] = period1[numberArr[2]];
        } else if (numberArr[1] == 1) {
            result[2] = period2[numberArr[2]];
        } else {
            result[2] = period3[numberArr[1]];
            result[3] = ' ' + period1[numberArr[2]];
        }
    }

    return result.join('').trim();
}
