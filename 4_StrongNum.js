//CHeck Given number is strong or not
// the numbers whose sum of the factorial of digits is equal to the original number.

function calFactorial(n){
    if(n==0 ||n==1){
        return 1
    }
    return n*calFactorial(n-1);
}
function strongNumber(y){
    let sum=0;
    let x=y;
    while(x!=0){
         let digit=x%10;
        sum+=calFactorial(digit);
        x=Math.floor(x/10);
         
    }
    console.log("The sum of factorial of digit is ",sum);
    if(sum==y){
        console.log(true);
    }
    else{
        console.log(false);
    }

}
strongNumber(5);