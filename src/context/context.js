import React, { useReducer, createContext } from "react"
import contextReducer from "./contextReducer"

const initialState = []

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
        dispatch({ type: "DELETE_TRANSACTION", payload: id })
    }

    const addTransaction = (transaction) => {
        //since it hasn't been created yet there is no id to use
        dispatch({ type: "ADD_TRANSACTION", payload: transaction })
    }

    return (
        <TrackExpenseContext.Provider
            value={{
                deleteTransaction: deleteTransaction,
                addTransaction: addTransaction,
            }}
        >
            {children}
            {/* standard for context always write it like this */}
        </TrackExpenseContext.Provider>
    )
}

//imported at and wraps around index.js
//info for reducers start aroud 52 00 https://www.youtube.com/watch?v=NnUFOWR_V4Y
