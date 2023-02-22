const numbers=[1,2,3,4,5,6];

const indexArr = numbers.filter(function (index, item, og){
    console.log(item);
    return item >3;

})

console.log(indexArr);

const itemArr = numbers.filter(function (item, index, og){
    console.log(item);
    return item >3;
})

console.log(itemArr);