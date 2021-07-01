import React from "react"
//renaming List as MUIList because its the same as component name so it might throw an error
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from "@material-ui/core"
import { Delete, MoneyOff } from "@material-ui/icons"

import useStyles from "./styles"

const List = () => {
    const classes = useStyles()
    const transactions = [
        { id: 1, type: "Income", category: "Salary", amount: 50, date: "Tue June 31" },
        { id: 2, type: "Expense", category: "Food", amount: 100, date: "Tue June 30" },
        { id: 3, type: "Income", category: "Stonks", amount: 200, date: "Tue June 29" },
    ]

    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === "Income" ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="Delete" onclick="">
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    )
}

export default List
//parenthesis means instant return vs if we put {} it means a function block
