import Queue from "./Queue";
import Stack from "./Stack";

let q = new Queue();
let q2 = new Queue();
let s = new Stack();
q.name = "uno";
q2.name = "dos";

console.log(q.name, q2.name);
q.print();
s.print();
