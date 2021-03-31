function Animal() {
    this.owner = "foo";
}

Animal.prototype.getowner = function() {
    return this.owner;
}

function Dog(name, color) {

    this.name = "abc",
        this.color = "blue";

}

Dog.prototype.getname = function() {
        return this.name;
    }
    // Dog.prototype = Animal.prototype;
Dog.prototype = new Animal();
// Dog.prototype.constructor = Dog;

var a = new Animal();
var b = new Dog();



console.log(b.owner);