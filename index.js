const Spiderman = require('./app/spiderman')
const Superhero = require('./app/Superhero');
const TSpiderman = require('./app/Tspiderman')
const Andrew = new Spiderman ("Spiderman Sony",31,"Andrew Garfield",2,"Sony")
console.log(Andrew.name)
console.log(Andrew.age)
console.log(Andrew.actor)
console.log(Andrew.movies)
console.log(Andrew.studio + "\n")
const Ironman = new Superhero ("Iron Man","Robert Downey Jr.","Tony Stark")
console.log(Ironman.name)
console.log(Ironman.actor)
console.log(Ironman.heroName + "\n")
const TomHolland = new TSpiderman ("Spiderman Marvel",25,"Tom Holland", 5, "Marvel")
console.log(TomHolland.name)
console.log(TomHolland.age)
console.log(TomHolland.actor)
console.log(TomHolland.studio)
