import { addExpense, editExpense , removeExpense  } from "../../actions/expenses";


test("Remove expense", () => {
    const action = removeExpense({id: 'a231'});

    expect(action).toEqual({
        id: "a231",
        type: 'REMOVE_EXPENSE'
    });
});

test("edit expense", ()=> {
    const id = '234a';
    const expense = {
        description: 'test',
        amount: 34
    }
    const action = editExpense(id, expense);

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: id,
        updates: expense

        });
});

test('should setup add expense action object with provided values', ()=> {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
        
    })
});

test('should setup add expense action object with default values', ()=> {
    
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            amount: 0,
            createdAt: 0,
            note: '',
            id: expect.any(String)
        }
        
    })
});