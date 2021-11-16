const students=[
    {id:21,name:'Omar Sunny'},
    {id:31,name:'Mannaaa'},
    {id:41,name:'Moyouri'},
    {id:51,name:'Deepjol'}
];
const names=students.map(s=>s.name);
const ids=students.map(i=>i.id);
const bigger=students.filter(s =>s.id>40);
const bigger2=students.find(s =>s.id>40);
console.log(names);
console.log(ids);
console.log(bigger);
console.log(bigger2);