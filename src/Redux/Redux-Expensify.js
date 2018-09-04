import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
// Expenses Reducers 

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState , action ) =>{
    
    switch(action.type)
    {
        case 'ADD_EXPENSE' :
                              
                           return [...state,action.expenses]; 
                           break;
        case 'REMOVE_EXPENSE' :
                             return state.filter( ( {id} ) =>  !(id === action.id)  );      
                            break;

        case 'UPDATE_EXPENSE':
                                
                                
                           return  state.map(  (expense) => { 

                                if(expense.id === action.id)
                                {
                                                                                                          
                                  return ({...expense,...action.obj})
                                
                                    
                                }
                                else
                                    return expense;
                            }); 
                            
                            
                                                   
        default : 
                return state;
    }

}

// Action Creator :-

const addExpense = ({ description = 'Not Set', notes = 'Not Set', amount = 0 ,createdAt = new Date()} = {}) => ({

    type : 'ADD_EXPENSE',
    expenses : {
        id : uuid(),
        description,
        notes,
        amount,
        createdAt
    }
}); 

// RemoveExpenseActionCreator

const removeExpense = ( { id = '' } = {} ) => {
    
   return {
    type : 'REMOVE_EXPENSE',
    id
}};

// Update Expense Action Creator
const updateExpese = ( ( id , obj )  => ({ 

        type: 'UPDATE_EXPENSE',
        id,
        obj

    }) );


// Filter Reducers 

const filtersReducerDefaultState = {
    text      :   '',
    sortBy    :   'date',
    startDate : undefined,
    endDate   : undefined
};


//Reducer for filter store

const filtersReducers = (state = filtersReducerDefaultState, action)=>{

    switch(action.type)
    {
        case 'SET_TEXT' :
                        return {...state , text :action.text};
        case 'SORT_BY_AMOUNT':
                        return {...state,sortBy : 'amount'} ;
        case 'SORT_BY_DATE' :
                        return {...state,sortBy : 'date'};
        case 'SET_START_DATE' :
                        return {...state, startDate : action.startDate };
        case 'SET_END_DATE' :
                        return {...state, endDate : action.endDate };

        default :
                return state;
    }



}

// action creator ;

const setTextFilter = (text = '') =>({ type:'SET_TEXT', text  })

// action  creator for sortByAmount  

const sortByAmount = () => ({ type : 'SORT_BY_AMOUNT' });

// action creator for sortByDate

const sortByDate = () => ({ type : 'SORT_BY_DATE' });

// action creator for setStartDate

const setStartDate = (startDate = undefined ) => ( { type : 'SET_START_DATE',startDate  } );

// action creator for setEndDate 

const setEndDate = (endDate =  undefined ) => ( { type : 'SET_END_DATE', endDate  });

// create store
const obj = combineReducers({

    expenses    :   expensesReducer,
    filters     :   filtersReducers

});

const store = createStore(obj);

store.subscribe( () => console.log('this state===',store.getState()));

const expenseOne = store.dispatch(
    addExpense( 
    {   description:'Rent',
        notes:'Rent for this month',
        amount:5000,
        createdAt:new Date()
    }
 )
);

const expenseTwo = store.dispatch(
    addExpense(
        {description:'cofee',
        notes:'StarBucks Cofee',
        amount: 400,
        createdAt : new Date()
    }
)
)

store.dispatch( removeExpense( {id : expenseOne.expenses.id} ) );
store.dispatch( updateExpese(expenseTwo.expenses.id , { description : 'This edited Description', notes : 'CCD coffee', amount : 500, createdAt : new Date() } ) );
store.dispatch( setTextFilter('rent'));
store.dispatch( setTextFilter('Cofee'));
store.dispatch( setTextFilter() );
store.dispatch( sortByAmount()  );
store.dispatch( sortByDate()  );
store.dispatch( setStartDate(new Date() ) );
store.dispatch( setStartDate( ) );
store.dispatch( setEndDate(new Date() ) );




const demoState = {

    expenses : [{
        id          : '#123#123',
        description : 'Rent',
        notes       : 'This is the final payment',
        amount      : 5000,
        createdAt   : 0
    }] ,

    filters : {

        text      : 'rent',
        sortBy    : 'amount',
        startDate : undefined,
        endDate   : undefined  


    }
};


