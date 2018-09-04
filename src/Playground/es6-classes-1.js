class Person{
    
    constructor(name = 'Isha Sharma' , age = 0){
        this.name = name;
        this.age =  age;
        
}

getGretting() {

    return this.name+ 'hi';

}
getDiscriptiom() {

    return `${this.name} is Google developer at the age of ${this.age}`;
}
}
class Traveler extends Person{
constructor(name , age , homeLocation)
{
    
    super(name , age);
    this.homeLocation = homeLocation;
    
}
getGretting(){

if(this.homeLocation){

    return super.getDiscriptiom() + `. I am visiting from ${this.homeLocation}`
}    
else
    return super.getDiscriptiom();

}

}

const me = new Traveler('Deepak Sharma',24);
console.log(me);
console.log(me.getGretting());
const other = new Traveler('deepak',10,'Bengaluru');
console.log(other);;
console.log(other.getGretting());