const myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);// object

// let mycreatedDate=new Date(2024,0,4);
// let mycreatedDate=new Date(2024,0,4,5,2,32);
// let mycreatedDate=new Date("2024-05-05");
let mycreatedDate=new Date("04-05-2024");

// console.log(mycreatedDate.toLocaleString());

let myTimeStamp=Date.now();
// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));



let newDate=new Date();
// console.log(newDate.toLocaleString())
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getMonth());
// console.log(newDate.getMinutes());
// console.log(newDate.getTime());

newDate.toLocaleString('default',{
    weekday:'long'
})