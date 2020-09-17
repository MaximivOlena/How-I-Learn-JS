// Ввід імені
let name = prompt(`Hello! Tell me you name, dude.`)

// Виправлення імені, перша літера завжди велика, інші завжди малі
let correctName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

// Вивід імені на екран
alert( `Your name is ${correctName}` );