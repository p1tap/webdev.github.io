L = [1,2,3,4,5,6,7,8,9,10] 
L1 = [10,9,8,7,6,5,4,3,2,1]
const sum = L.reduce((acc, curr) => acc + curr, 0);
const product = L.reduce((acc, curr) => acc * curr, 1);

console.log(sum);
console.log(product);   
console.log(L1.sort((a, b) => a - b));  // sort Array L1 in ascending order

L2 = [
    { id: 6511234, name: 'Jack', salary: 10000 },
    { id: 6511235, name: 'Mike', salary: 15000 },
    { id: 6511236, name: 'Nancy', salary: 20000 },
    { id: 6511237, name: 'Alice', salary: 30000 },
];

console.table(L2.map(id => ({ ...id, salary: id.salary * 1.1 }))); // 10% raise
console.table(L2.map(id => ({ ...id, BONUS: id.salary * 0.2 }))); // 20% bonus

console.table(L2.sort((a, b) => a.name.localeCompare(b.name))); // sort name
console.table(L2.sort((a, b) => a.salary - b.salary)); // sort by salary

A = ['a','c','d'] 
B = ['b','d','e'] 
console.log(A.concat(B))