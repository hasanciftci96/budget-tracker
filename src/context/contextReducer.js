const contextReducer = (state, action) => {
    //remember state is the old data like the transaction array
    let transactions //reason why we do this is we can't have 2 different const called transactions
    switch (action.type) {
        case "DELETE_TRANSACTION":
            transactions = state.filter((t) => t.id !== action.payload) //payload'u id'ye context.js'de esitledik

            localStorage.setItem("transactions", JSON.stringify(transactions))
            //first transaction with "" is a randomName we give so localStorage can store it with that name

            return transactions

        case "ADD_TRANSACTION":
            transactions = [action.payload, ...state] //once we call ADD_TRANSACTION we already provide the entire transaction info at context.js

            localStorage.setItem("transactions", JSON.stringify(transactions))

            return transactions
        default:
            return state
    }
}

export default contextReducer
