const students = [
    {id : 21 , name : 'Arpita Haque'},
    {id : 31 , name : 'Aabtaahi Samin'},
    {id : 41 , name : 'Mubtaseem Anjum'},
    {id : 71 , name : 'UbyDhaaaa'},
]

// const onlyNames =[] ;

// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const result = element.name ;
//     onlyNames.push(result);
// }

// console.log(onlyNames);

const names = students.map(students => students.name);
const ids = students.map(students => students.id);
console.log(names);
console.log(ids);

const bigger = students.filter(s => s.id>40);
console.log(bigger);

const biggerFind = students.find(s => s.id>40);
console.log(biggerFind);