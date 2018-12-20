function NewHorse(){
    this.age = 0

    //grow up
    setInterval(()=>{
        this.age++;
        console.log("New horse is ", this.age)
    }, 1000);
}
var p = new NewHorse();