var Person = funcrtion(name) {
  this.name = name;
}

Person.prototype.getName = function() {
  return this.name;
}

Person.prottype.setName = function() {
  this.name = name;
}

var alice = new Person('alice');
alice.getName();
alice.setName('bob');
alice.getName();
console.log(alice.getName());
