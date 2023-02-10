if(true){
    console.log('true');
}else console.log('false');


let a = 11;
if(a===true){
    console.log("a는", "true");
}else if(a===5){
    console.log("a는", "true아닌 5");
}else console.log("a는", "5도 true도 아님");

let age = 16;
age +=2;
if(age > 40){
    console.log('삐삐비비빅 늙은이');
}else if (age<=40 && age>=20){
    console.log("삐비비비빅 mz 세대")
}else{
    console.log('삐빅 급식');
}

// if문 중첩
let isOld = true;
let isRich = false;

if(isOld){
    if(isRich){
        console.log("늙, 가");
    } else{
        console.log("늙, 부");
    }
}else{console.log("젊");
}

//switch
let gender = 'F';

switch(gender){
    case 'M':
        console.log('남자요');
        break;
    case 'F':
        console.log('여자요');
        break;
    case 'tg':
        console.log('트젠이요');  
        break;      
    default:
        console.log('X');    
}


let date = new Date().getDay();
if(date==0){
    console.log("일요일");
    alert("일요일");
}else if(date==1){
    console.log("월요일");
    alert("월요일");
}else if(date==2){
    console.log("화요일");
    alert("화요일");
}else if(date==3){
    console.log("수요일");
    alert("수요일");
}else if(date==4){
    console.log("목요일");
    alert("목요일");
}else if(date==5){
    console.log("금요일");
    alert("금요일");
}else if(date==6){
    console.log("토요일");
    alert("토요일");
}else{
    console.log("그런요일은 없어요");
    alert("그런요일은 없는데요");
}