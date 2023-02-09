let park = {
    name:"park",
    age:"27",
    isOld: true,
    isMarried:false,
    hoby:["game","music","driving"]
}

console.log(park);

console.log(park.name);

Object.entries(park).forEach(([key,value])=>console.log(key+" "+value));