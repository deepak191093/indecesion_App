import { createStore }  from 'redux';

const incrementBy = ( { incrementBy = 1 } = {incrementBy :2000} ) => { return {type : 'INCREMENT',  incrementBy } };
const decrementBy = ( { decrementBy = 1 } = {} ) => { return {type : 'DECREMENT',  decrementBy } };
const setDefaultBy= ( { defaultby   = 0 } = {} ) => { return {type : 'SETDEFAULT', defaultby   } };
const reset       = (     ) => { return {type : 'RESET'    } };

const store = createStore( (state = {count : 0}, action) => {

  

    switch(action.type)
    {
        case 'INCREMENT' : return { count : state.count + action.incrementBy }; 
        case 'DECREMENT' : return { count : state.count - action.decrementBy };
        case 'SETDEFAULT': return { count : action.defaultby };
        case 'RESET'     : return { count : 0 };
        default : return state;
    }




});

store.subscribe( ()=> { console.log(store.getState()) })
store.dispatch( incrementBy() );
store.dispatch( incrementBy( { incrementBy : 10 } ) );
store.dispatch( decrementBy());
store.dispatch( decrementBy( {decrementBy : 201 } ) );
store.dispatch( reset() );
store.dispatch( setDefaultBy( {defaultby : 222222}) );

