//Check if a given string is palindrome or not

let s='aabbaa';
function isPalindrome(x){
    let i=0;
    let j=x.length-1;
    while(i<=j){
        if(x[i]!=x[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;

}
let y='abcde'
let j='aac'
console.log(isPalindrome(s));
console.log(isPalindrome(y));
console.log(isPalindrome(j));