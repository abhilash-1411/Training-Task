// program to reverse the array without using the built-in array function. 
let arr=[1,2,3,4,5];
const brr=[10,9,8,7,6];
function reverseArray(arr){
let i=0;
let j=arr.length-1;
while(i<=j){
    let temp=arr[i]
    arr[i]=arr[j];
    arr[j]=temp;
    i++;
    j--;
}
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
}
reverseArray(arr);


