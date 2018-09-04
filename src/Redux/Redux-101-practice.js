import {createStore} from 'redux';

//Redux is a framework 
const store = createStore( ( state = {count : 0}, action ) => {
     let incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
     let decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;   
    switch(action.type){
        case 'INCREMENT' : return { count : state.count + incrementBy }
        case 'DECREMENT' : return { count : state.count - decrementBy }
        case 'RESET'     : return { count : action.data               }
        default: return state;
    }
});
console.log(store.getState());
let a = 0;
//store.subscribe( ()=> {console.log("a====",a++)} );

store.dispatch({

type : 'INCREMENT',
incrementBy : 5

});
console.log(store.getState());

store.dispatch({

    type : 'DECREMENT'

});
console.log(store.getState());

store.dispatch({

    type : 'DECREMENT',
    decrementBy :  100

});
console.log(store.getState());

store.dispatch({

    type : 'RESET',
    data : 5

});
console.log(store.getState());

const obj = {
    name : 'Deepak Sharma',
    age  : 24,
    location : {

        city : 'Bangalore',
        temp : 22
    }

}
const { name , age } = obj;
const { city : place , temp} = obj.location;
console.log(`My name is ${name} and my age is ${age} and i live in ${place} and temp is ${temp}`);

const book = {
    title : 'Ego is the enemy',
    author : 'Ryan Holiday',
    publisher : {
        // name : 'penguin'
    }
};

const {name : publisherName = 'self-published'} = book.publisher;
console.log(publisherName)

const obj1 = {
    firstName : 'ISHA',
    // lastName  : 'Bhadhauria',
    Address : {
        flatNo : 'b804',
        city   : 'Bangalore'  
    }   
}

const {firstName , lastName : secondName = 'Sharma'} = obj1 ; //this is like a default argument.
console.log(`My FirstName is ${firstName} and my LastName is ${secondName } `);


const arr = ['Deepak' , 'Sharma' , 'Age', 24];
const [name1 , lastname , age1 , agevalue] =arr ;
console.log(`My name is ${name1} and my lastname is  ${lastname} and my ${age1} is ${agevalue} `);

const item = ['Coffee (cold)' , '$2.00' , '$2.50' , '$3.33' ];
const [coffee , , medium, ,extralarge = 3.88] = item;
console.log(`A medium ${coffee} costs ${medium} and extralage will cost ${extralarge}`);
