function Person(fullName, favColor){
    this.name = fullName;
    this.color = favColor;
    this.greet = function(){
        console.log("hi there. My name is " + this.name + " fav colour is " + this.color + ".");
    }
}
