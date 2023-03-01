// function to check for a leap year
const isLeap = year => {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
 };
 const nextNLeap = n => {
    const arr = [];
    let year = new Date().getFullYear()+1;
    while(arr.length < n){
       if(isLeap(year++)){
          arr.push(year-1);
       };
    };
    return arr;
 };
 console.log(nextNLeap(5));
 console.log(nextNLeap(25));