// program to add elements at a given position and value in an array without using a built-in array function.
function addElementAtPos(arr,position,element){
    let brr=[];
    for(let i=0;i<position;i++){
         brr[i]=arr[i];
            }
      brr[position]=element;
      for(let i=position;i<arr.length;i++){
        brr[i+1]=arr[i];
      }
      console.log(...brr)
}


let arr=[1,2,3,4,5,6,8,9];
addElementAtPos(arr,11,6);