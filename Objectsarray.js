


const names = ['Taras', 'Ostap', 'Mykola'];

const namesObject = names.reduce((obj, name, index) => {
  obj[index] = name;
  return obj;
}, {});

console.log(namesObject);

for(let i=0; i<names.length;i++)
{
  console.log(`Book title at index ${i}: ${namesObject[i]}`);
}

