// 다중 비교
// 여자, 이름 Jane or 성인
let gender ='M';
let name='Tom';
let isAdultTom = true;

if(gender === 'M' && name==='Jane' || isAdultTom === true){
    console.log('통과');
}else{
    console.log('ㅋㅋ');
}

let isAdult_1 = true;
let vip = true;
let isDrunken=true;
let money = true;


if(isAdult || vip){
    if(isDrunken){
        console.log("집에가");   
    }else{
        console.log("ok입장");
    }
    
}else{
    if(money){
        console.log("ok입장");
    }else console.log("집에가");
}


if((((isAdult || vip)&&!isDrunken)||money))
{   
    //성인 혹은 vip check - 1
    //1과 drunken check(둚 다 만족) - 2
    //2와 money check(하나만 만족)-3
    console.log("ok입장");       
}else{
    console.log("집에가");
}