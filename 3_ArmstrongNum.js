// check given number is an Armstrong number or not
// Armstrong number is a number that is equal to the sum of cubes of its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong numbers. 

// function ArmstrongNum(s){
//     let sum=0;
//     for(let i=0;i<s.length;i++){
//         sum+=(s[i]*s[i]*s[i])
//     }
//     console.log(sum);
//     if(sum==s) return true;
// else{
//     return false;
// }
   
// }
// const ans=ArmstrongNum('372');
// console.log(ans);

function ArmstrongNum(n){
    let sum=0;
    let y=n;
    while(y!=0){
        let digit=y%10;
        sum+=(digit*digit*digit);
        y=Math.floor(y/10);
    }
    console.log('The sum of cube of digits is',sum);
    if(sum==n) {
        console.log(true)
    }
    else{
        console.log(false)
    }
}
ArmstrongNum(370);

