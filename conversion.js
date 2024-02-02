function convertNumberToWords(number) {
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    function convertTwoDigits(num) {
        if (num < 10) {
            return ones[num];
        } else if (num < 20) {
            return teens[num - 10];
        } else {
            var tensDigit = Math.floor(num / 10);
            var onesDigit = num % 10;
            return tens[tensDigit] + (onesDigit !== 0 ? ' ' + ones[onesDigit] : '');
        }
    }

    function convertThreeDigits(num) {
        var result = '';
        var hundreds = Math.floor(num / 100);
        var remainder = num % 100;
        if (hundreds > 0) {
            result += ones[hundreds] + ' hundred ';
        }
        if (remainder > 0) {
            if (result !== '') {
                result += 'and ';
            }
            result += convertTwoDigits(remainder);
        }
        return result;
    }

    if (number === 0) {
        return 'zero';
    }

    var crore = Math.floor(number / 10000000);
    var lakh = Math.floor((number % 10000000) / 100000);
    var thousand = Math.floor((number % 100000) / 1000);
    var remaining = number % 1000;
    var result = '';

    if (crore > 0) {
        result += convertThreeDigits(crore) + ' crore ';
    }
    if (lakh > 0) {
        result += convertThreeDigits(lakh) + ' lakh ';
    }
    if (thousand > 0) {
        result += convertThreeDigits(thousand) + ' thousand ';
    }
    if (remaining > 0) {
        result += convertThreeDigits(remaining);
    }

    return result.trim();
}

function con() {
    var inputNumber = document.getElementById("data").value;
    var parsedNumber = parseInt(inputNumber);
    if (!isNaN(parsedNumber)) {
        var result = convertNumberToWords(parsedNumber);
        document.getElementById("result").innerHTML = result;
    } else {
        document.getElementById("result").innerHTML = "Please enter a valid number.";
    }
}