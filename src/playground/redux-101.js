import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

const countReducer = ((state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            //const incrementBy = action.incrementBy !== undefined ? action.incrementBy : 1;
            //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };     
         default:
            state;  
    };
});

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Increment
/* store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
}); */

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());

// Reset
store.dispatch(resetCount());

// Decrement
store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: 101}));

