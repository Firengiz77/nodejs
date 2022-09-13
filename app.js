// let sayhello =require ('./employee.js');
// 1 function olduqda beel cagirmaq olar

let employee =require ('./employee');
// require ile o biri js calisdirilir

employee.sayhello('Fira');
// let sayage =require ('./employee.js').sayage;
// sadece 1ini isletmek istedikde
employee.sayage(21);
// basqa jsda funckion yazilanda burda isletmek ucun
// bunun ucun module.export edilir o biri jsda sonra burda calisdirmaq olur

