import React, { useReducer, createContext } from "react"
import contextReducer from "./contextReducer"

const initialState = JSON.parse(localStorage.getItem("transactions")) || [
    { amount: 500, category: "Salary", type: "Income", date: "2021-07-02", id: "1" },
    { amount: 225, category: "Investments", type: "Income", date: "2021-07-02", id: "2" },
    { amount: 50, category: "Salary", type: "Income", date: "2021-07-02", id: "3" },
    { amount: 123, category: "Car", type: "Expense", date: "2021-07-02", id: "4" },
    { amount: 50, category: "Pets", type: "Expense", date: "2021-07-02", id: "5" },
    { amount: 500, category: "Travel", type: "Expense", date: "2021-07-02", id: "6" },
    { amount: 50, category: "Investments", type: "Income", date: "2021-07-02", id: "7" },
    { amount: 500, category: "Savings", type: "Income", date: "2021-07-02", id: "8" },
    { amount: 5, category: "Savings", type: "Income", date: "2021-07-02", id: "9" },
]

export const TrackExpenseContext = createContext(initialState)

//My TrackExpenseContext = his ExpenseTrackerContext
export const Provider = ({ children }) => {
    //everything inside here has access to context

    //Uncomment below to get info about usereducer
    //const [state, dispatch] = useReducer(reducer, initialState, init) //first thing in the parenthesis is a single function that tells us how we will be changing our state
    //Reducer is a function that takes in the old state and and action then returns a new state

    const [transactions, dispatch] = useReducer(contextReducer, initialState)

    //Action Creators
    const deleteTransaction = (id) => {
        dispatch({ type: "DELETE_TRANSACTION", payload: id }) //unutuma dispatch'in icindeki tum seye action deniyor
    }

    const addTransaction = (transaction) => {
        //since it hasn't been created yet there is no id to use
        dispatch({ type: "ADD_TRANSACTION", payload: transaction })
    }

    const balance = transactions.reduce((acc, currVal) => {
        return currVal.type === "Expense" ? acc - currVal.amount : acc + currVal.amount
    }, 0)

    return (
        <TrackExpenseContext.Provider
            value={{
                deleteTransaction: deleteTransaction,
                addTransaction: addTransaction,
                transactions: transactions,
                balance,
            }}
        >
            {children}
            {/* standard for context always write it like this */}
        </TrackExpenseContext.Provider>
    )
}

//imported at and wraps around index.js
//info for reducers start aroud 52 00 https://www.youtube.com/watch?v=NnUFOWR_V4Y
