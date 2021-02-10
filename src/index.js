module.exports = function toReadable (num) {
  let ones = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hundred = ' hundred';
  let output = '';
  let numString = num.toString();
if (num == 0) {
    return 'zero';
}

if (num < 20) {
    output = ones[num];
    return output;
}

//100 and more
if (numString.length == 3) {
    output = ones[parseInt(numString.charAt(0))] + hundred;
    if(parseInt(numString.charAt(1))==1)
    {
        output +=' '+ ones[parseInt(numString.charAt(1)+numString.charAt(2))]; 
        return output; 
    }
    if(parseInt(numString.charAt(1))==0 && parseInt(numString.charAt(2))==0){
        return output;
    }
    if(parseInt(numString.charAt(2))==0){
        output +=' '+ tens[parseInt(numString.charAt(1))];
        return output;
    }
    if(parseInt(numString.charAt(1))==0){
        output +=' '+ tens[parseInt(numString.charAt(1))];
        output += ones[parseInt(numString.charAt(2))];
        return output;
    }
    output +=' '+ tens[parseInt(numString.charAt(1))]+' ';
    output += ones[parseInt(numString.charAt(2))];
    return output;
}
if(parseInt(numString.charAt(1))==0){
    output += tens[parseInt(numString.charAt(0))];
    return output;
}
output += tens[parseInt(numString.charAt(0))]+' ';
output += ones[parseInt(numString.charAt(1))];
return output;
}
