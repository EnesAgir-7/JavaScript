//----------------219-----------------
// function Person(name,birthOfYear,job){
//     this.name = name;
//     this.birthOfYear=birthOfYear;
//     this.job=job;

// }

// let yigit = new Person('yigit',2010,'student');
// let emel = new Person('emel',1980,'teacher');


//---------------221-------------------

// function Employee(name,salary){
// if (!this instanceof Employee){
//     return new Employee(name,salary);
// }
    
//     this.name = name;
//     this.salary=salary;
// }
// Employee.prototype.calculateSalary = function(){
//     var month = new Date().getMonth()+1;
//     var tax = 0;
//     var total=this.salary*month;    

//     if (total<=20000){
//         tax = total*0.2;
//     }else if(total >20000 && total<=30000){
//         tax = total * 0.25;
//     }else{
//         tax = total * 0.3;
//     }

//     return {
//         tax : tax,
//         paid : total - tax 
//     }
// }

// var emp1 = new Employee('enes',5000);
// var emp1_salary= emp1.calculateSalary();

// console.log(`${emp1.name} isimli personal ${emp1_salary.tax} vargi kesintisi ile ${emp1_salary.paid} maas almistir`)


// var emp2 = new Employee('can',3000);
// var emp1_salary= emp2.calculateSalary();

//--------------223-------------------

let Person = function(name,birthOfYear,job){
    this.name=name;
    this.birthOfYear=birthOfYear;
    this.job = job;
}

Person.prototype.calculateAge=function(){
    return 2018 - this.birthOfYear;
}
let Teacher = function(name,birthOfYear,job,subject){
    Person.call(this,name,birthOfYear,job);
    this.subject = subject;
}

let emel = new Teacher('emel',1990,'teacher','math');

console.log(emel);

















