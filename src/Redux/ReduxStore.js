import {createStore} from 'redux';

const state = {authentication :  false};

const actionLoginBy = (  {loginBy : loginType = 'LOGIN'} = {}     ) => { return { type: loginType} };

const store = createStore( (state,action) => {

    if(action.type === 'LOGIN')
    {
        console.log(`Insdie store action with action type == ${action.type}`);
        state  = {authentication : true};
        return state;
    }
    else if(action.type === 'Deepak')
    {
        console.log(`Inside store action with action type ==${action.type}`);
    }
    else{
        return state;
    }
}
);
const add = ({a , b , c = 30}) => console.log(a+b+c);

add( {a : 10 ,b :20});

store.dispatch( actionLoginBy() );