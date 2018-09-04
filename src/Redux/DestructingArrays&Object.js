const obj = {
    name : 'Deepak Sharma',
    age  : '24',
    address : {
        city : 'Bangalore',
        flatNo : 'B804'
    }   
};

const {name , age , address , landmark = 'Wipro gate'} = obj;

console.log(`My name is ${name} and age is ${age} and my flat no is ${address.flatNo}  and city is ${address.city} and LandMark is ${landmark}`);

const array = ['Coffe (cold)' ,3.50 ,3.75 ,4.00];

const [coffee , small , regular , large , xtraLarge = 20] = array;

console.log(`Item Selected is ${coffee} price for small, regular , large and Xtralage is ${small}, ${regular}, ${large}, ${xtraLarge}` );
