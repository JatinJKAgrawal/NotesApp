var square = x => x*x;
console.log(square(9));

var user = {
  name: 'Jatin',
  sayHii: () => console.log(`Hii! I'm ${this.name}`)
}
user.sayHii();
