// Program to remove duplicate numbers from the array and Print a sorted array without using any built-in function.
let arr=[5,5,5,4,4,3,1,1,2,2];
let ans=[];
function push(arr,element){
    let n=arr.length
    arr[n]=element;
}
for(let i=0;i<arr.length;i++){
   
    if(arr[i]==arr[i+1]){
        continue;
    }
    else{
        push(ans,arr[i]);
    }
    
}
console.log(`Array after remove duplicate ${ans}`)
for(let i=0;i<ans.length;i++){
    for(let j=i+1;j<ans.length;j++){
        if(ans[i]>ans[j]){
         let temp=ans[i];
         ans[i]=ans[j];
         ans[j]=temp;
        }
        else{
            break;
        }
    }
    
}
console.log(`Array after sorting ${ans}`)