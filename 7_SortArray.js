// program to sort an array without using built-in array function.
let arr=[5,4,3,2,1,67,63,6];
let brr=[1,4,2,5,3];
 function sort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
           if(arr[j]<arr[i]){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
           }
           else{
            break;
           }
        }
    }
    console.log(...arr)
 }
 sort(arr);
 sort(brr);