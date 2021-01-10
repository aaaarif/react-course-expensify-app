import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>this is from expsense list</h1>
        {props.expenses.map((expense) => (    
                <ExpenseListItem 
                    key={expense.id}
                    {...expense}
                />
        ))}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses : selectExpenses(state.expenses, state.filters)
    };
};
export default connect(mapStateToProps)(ExpenseList);

//const ConnectedExpsenseList = connect((state) => {
/*export default connect((state) => {
    return {
        expenses: state.expenses
    }
})(ExpenseList);
*/