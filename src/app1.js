//import './utils.js';
import subtract1, { square, addition } from './utils.js';
import isSeniorr,{isAdult, canDrink ,isSenior} from './person.js';
import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import {name} from './person.js';
console.log('app.js is running');
console.log(square(10));
console.log(addition(15));
console.log(subtract1(100,90));


console.log('------------The Person Details-----------');
console.log( isAdult(19) );
console.log( canDrink(22) );
console.log('name ==',name);
console.log( isSenior(9));
console.log( isSeniorr(12));

console.log('this email is ==',validator.isEmail('eepak@abc.com'));

const templete =( 
    <div>
    This is babel from jsx
    {React.createElement('h1','','My name is deepak')}
    </div>
     );

ReactDOM.render(templete, document.getElementById('app'));