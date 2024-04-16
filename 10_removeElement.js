// Program to remove elements at a given position in an array without using a built-in array function.
let arr=[1,2,3,4,5,6,7,8];
function push(arr,element){
    let n=arr.length
    arr[n]=element;
}
function removeElement(arr,key){
    let ans=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]==key){
            continue;
        }
        else{
        push(ans,arr[i]);
          
        }
       
     
    }
    console.log(ans);
   
}
removeElement(arr,5);


