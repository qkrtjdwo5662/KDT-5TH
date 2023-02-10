for(let i=0; i<20; i++){
    if(i%2===1) {
        continue;
    } else{
        console.log(`${i} 번 입니다.`);
    }
    
    if(i===16) 
        break;
}

let sum =0;

for(let j=1; j<1000; j++){
    if(j%2===0){
        sum = sum + j;
    }else continue;
}

console.log(sum);