function OldHorse() {
    this.age = 0;

    //grow up
    setInterval(function() {
        this.age++;
        console.log("Old horse is", this.age)
    }, 1000);
}
var p = new OldHorse();