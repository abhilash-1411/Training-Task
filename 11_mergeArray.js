// Program to merge two arrays, sort and reverse arrays without using built-in array function.
//Merge two array
// let arr1=[1,3,5,7];
// let arr2=[2,4,6,8];
// let n=arr1.length;
// let m=arr2.length;
// let ans=[];
// let i=0;
// let j=0;
// let k=0;
// while(i<n && j<m){
//     if(arr1[i]<arr2[j]){
//         ans[k++]=arr1[i++];
//     }
//     else{
//         ans[k++]=arr2[j++];
//     }
// }
// while(i<n){
//     ans[k++]=arr1[i++];
// }
// while(j<m){
//     ans[k++]=arr2[j++];
// }
// console.log(ans);

//Sort Array
// let arr=[5,4,3,2,1,67,63,6];
// let brr=[1,4,2,5,3];
//  function sort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//            if(arr[j]<arr[i]){
//             let temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//            }
//            else{
//             break;
//            }
//         }
//     }
//     console.log(...arr)
//  }
//  sort(arr);
//  sort(brr);

 //Reverse
 let crr=[1,2,3,4,5];
const drr=[10,9,8,7,6];
function reverseArray(arr){
    let ans=[];
  for(let i=arr.length-1;i>=0;i--){
    ans[arr.length-i-1]=arr[i];
  }
  console.log(ans);  
}
reverseArray(crr);
