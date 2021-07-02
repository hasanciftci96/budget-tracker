import { useContext } from "react"
import { TrackExpenseContext } from "./context/context"

import { incomeCategories, expenseCategories, resetCategories } from "./constants/categories"

//video explanation at 1 36 57
//https://www.youtube.com/watch?v=NnUFOWR_V4Y

// {id:1, type: "Income", amount: 50, category: "Salary"}
// {id:2, type: "Expense", amount: 100, category: "Utility Bills"}
// {id:3, type: "Income", amount: 50, category: "Salary"}
// {id:4, type: "Income", amount: 50, category: "Business"}

// { type: "Salary", amount: 0, color: incomeColors[0] },
// { type: "Business", amount: 0, color: incomeColors[0] },
// { type: "Investments", amount: 0, color: incomeColors[1] },
// { type: "Extra income", amount: 0, color: incomeColors[2] },

const useTransactions = (title) => {
    //the only rule to make a custom hook is that it must start with the word use
    resetCategories() //because we have to reset amounts to zero each time
    //Lets say the we want to add all our salary amounts together
    const { transactions } = useContext(TrackExpenseContext)
    const transactionsPerType = transactions.filter((t) => t.type === title) //filters out the expenses from the list
    const total = transactionsPerType.reduce((acc, currVal) => (acc += currVal.amount), 0) //add everything up for income since we will be displaying the total income too
    const categories = title === "Income" ? incomeCategories : expenseCategories

    console.log({ transactionsPerType, total, categories })

    transactionsPerType.forEach((t) => {
        //transactionsPerType is the ones with id in then and categories is the second array
        const category = categories.find((c) => c.type === t.category)

        if (category) category.amount += t.amount
    })

    const filteredCategories = categories.filter((c) => c.amount > 0) //to remove unused categories

    const chartData = {
        datasets: [
            {
                data: filteredCategories.map((c) => c.amount),
                backgroundColor: filteredCategories.map((c) => c.color),
            },
        ],
        labels: filteredCategories.map((c) => c.type),
    }

    return { total, chartData }
}

export default useTransactions
