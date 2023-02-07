module.exports = function toReadable(number) {

    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundreds = 'hundred';
    let result = '';

    if (number <= 20) {
        result = units[number];
    }

    if (number > 20 && number < 100) {
        if (number % 10) {
            result = `${tens[Math.trunc(number / 10)]} ${units[number % 10]}`;
        }
        else result = `${tens[number / 10]}`;
    }

    if (number >= 100) {
        if (number % 100 <= 20) {
            result = `${units[Math.trunc(number / 100)]} ${hundreds} ${units[Math.trunc((number % 100))]}`;
        }
        else result = `${units[Math.trunc(number / 100)]} ${hundreds} ${tens[Math.trunc((number % 100) / 10)]} ${units[number % 10]}`;
    }


    if (number % 10 == 0) {
        if (number % 100) {
            result = `${units[Math.trunc(number / 100)]} ${hundreds} ${tens[Math.trunc((number % 100) / 10)]}`;

        } else {
            result = `${units[Math.trunc(number / 100)]} ${hundreds}`;
        }
    }
    return result;
}
