//Find an element in sorted array using binary search

function findKey(arr,key){
    let s=0;
    let e=arr.length-1;
    let mid=s+(e-s)/2;
    while(s<=e){
        if(key==arr[mid]){
         return true;
        }
        else if(key<arr[mid]){
            e=mid-1;
        }
        else{
            s=mid+1;
        }
        mid=s+(e-s)/2;
       return false;
    }
   

}
let arr=[1,2,3,4,5,6,7,8,9];
const ans=findKey(arr,11);
console.log(ans)