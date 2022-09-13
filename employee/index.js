let sayhello = require('./sayname');

let sayage = function(age){
    console.log(`My aGE IS ${age}`);
};

// sayhello('Fira');
// module.exports = sayhello;
// burda module exports adlar eyni olmalidir
module.exports = {
    sayhello: sayhello,
    sayage: sayage
}
// 2 funckstionu exports etmek istedikde



// sayhello2();
// functionu evvel cagira bilirik  let olani ise 1ci let yazilmalidi ondan sonra cagirilmalidir

// function sayhello2(name){
//     console.log(`My Name is ${name}`);
// };

