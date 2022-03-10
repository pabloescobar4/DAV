
function Person(first, last, age,result) {
    this.firstName = first,
    this.lastName = last,
    this.age = age,
    this.result= result
}


let myself = new Person("Abhi", "Singh", 25,"pass")
let Some = new Person("Ai", "Sin", "pass")
Some.age = 25

console.log(myself );
console.log(Some);