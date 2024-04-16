//Program to print the fibonacci Series
//0,1,1,2,3,5,8,13,21,34,55............

//Using while loop
function Fib(n){
    if(n==1){
        return 0;
    }
    if(n==2){
        return 1;
    }
    let n1=0;
    let n2=1;
    let sum;
    let i=2;
    while(i<n){
        sum=n1+n2;
        n1=n2;
        n2=sum;
        i+=1;
    }
    // console.log(n2);
    return n2;
}

// n=5 ----dry run
// n1=0,n2=1 i=2
// sum=1
// n1=1,n2=1 i=3
// sum=2
// n1=1,n2=2 i=4
// sum=3
// n1=2,n2=3 i=5

//Using recursion
function printFib(n){
    if(n==1){
        return 0;
    }
    if(n==2){
        return 1;
    }
    
   return printFib(n-1)+printFib(n-2);
}
// const ans=printFib(7);
// console.log(ans);

// const ans=Fib(7);
// console.log(ans);

const ans=printFib(7);
console.log(ans);