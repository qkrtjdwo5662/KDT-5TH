let a = 12;
let b = 20;


function abc(a, b){
    for(let i=2; i<=a&& i<=b; i++){
        if(a%i==0 && b%i==0){
            min = i;
        }
    }
    return min
}

console.log(abc(a,b) * a/abc(a,b)* b/abc(a,b));
