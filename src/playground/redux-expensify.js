import {createStore, combineReducers} from 'redux';
import {v4 as uuidv4} from 'uuid';

// add expense
const addExpense = (
    {
        description = '', 
        note = '' , 
        amount = '', 
        createdAt = 0
    } = {}
    ) => ({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuidv4(),
            description,
            note,
            amount,
            createdAt
        }
});

// remove expense
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// edit expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// set text filter.
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// sort by amount
const sortByAmount = ()=> ({
    type: 'SORT_BY_AMOUNT',
});

// sort by date
const sortByDate = ()=> ({
    type: 'SORT_BY_DATE',

});

// set start date
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// set end date
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter( (expense) => {
        console.log(expense);
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch =  expense.description.toLowerCase().includes(text.toLowerCase());
        //console.log(startDateMatch && endDateMatch && textMatch + "  " + text);
        return startDateMatch && endDateMatch && textMatch;
    }).sort( (a , b) => {
         if(sortBy === 'date') {
             return a.createdAt < b.createdAt ? 1 : -1;
         } else if(sortBy === 'amount') {
             return a.amount < b.amount ? 1 : -1;
         }
    });
};
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => action.id !== id);
        case 'EDIT_EXPENSE':
            return state.map( (expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    console.log(getVisibleExpenses(state.expenses, state.filters));
});

const expensesOne = store.dispatch(addExpense({description: 'rent', amount: 100, createdAt: -21000}));
const expensesTwo = store.dispatch(addExpense({description: 'coffee', amount: 300, createdAt: -1000}));

/*
store.dispatch(removeExpense({id:expensesOne.expense.id}));
store.dispatch(editExpense(expensesTwo.expense.id, {amount: 500}));
*/
//store.dispatch(setTextFilter('rent'));
//store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

//store.dispatch(setStartDate(125));
//store.dispatch(setStartDate());

//store.dispatch(setEndDate(500));
const demoState = {
    expenses: [{
        id: 'fghj;kl',
        description: 'January Rent',
        note: 'This is the final payment for that address',
        amount: 54400,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};
