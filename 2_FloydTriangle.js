// Program for Floyd’s triangle 
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
function floydTriangle(n){
    var number=1;
for(let i=1;i<=n;i++){
    var ans=''
    for(let j=1;j<=i;j++){
        ans+=number+" "
        number++
    }
    console.log(ans);

}
}
floydTriangle(7);