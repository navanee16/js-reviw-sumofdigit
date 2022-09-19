// sum of digit
var number=prompt('Enter number')
var sum=0;
var rems;
while (number>0) {
    rems=number % 10;
    sum=sum + rem;
    number=parseInt(number/10);
    
}
console.log('Sum of digit:',sum);
