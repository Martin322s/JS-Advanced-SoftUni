function extendClassWithSpecies(extensibleClass) {
    extensibleClass.prototype.species = "Human";
    extensibleClass.prototype.toSpeciesString = function () {
        return "I am a " + this.species + ". " + this.toString();
    };
}