var users = [
  { name: "Michael", age: 37 },
  { name: "John", age: 30 },
  { name: "David", age: 27 },
];

for (let i = 0; i < users.length; i++) {
  const valor = users[i];
  console.log(`${valor.name}-${valor.age}`);
}

// uso alternativo
// users.forEach((val)=> {
//   console.log(`${val.name}-${val.age}`);
// })
//comentario nuevo