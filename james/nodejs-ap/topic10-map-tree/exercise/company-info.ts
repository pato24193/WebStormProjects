let map = new Map();
map.set('22', 'Infosys');
map.set(32, 'TCS');
map.set(false,'Google');
map.set('45','Facebook');
map.set('65','Amazon');
map.set(32, 'Microsoft');

console.log("Employer at index 22: " +map.get('22'));
console.log("Employer at index 32: " +map.get(32));
console.log("Size of the map: " +map.size);
console.log("Deleting a value: " +map.delete('65'));
console.log( "New Size of the map: " +map.size);

// 1. Create project NodeJS
// 2. npm install typescript
// 3. npm install ts-node
// 4. Setting node package in Edit Config -> folder ts-node
// 5. Add "dom" in tsconfig.json to use "console.log".
// 6. Install plugin "Run config for TypeScript"
