import React from "react"
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core"
import { Doughnut } from "react-chartjs-2"
import useTransactions from "../../useTransactions"

//This is the left and right sides of the screen with the bar chart
import useStyles from "./styles"

const Details = ({ title }) => {
    //title here is equal to income or to expense in app.js
    const classes = useStyles()
    const { total, chartData } = useTransactions(title) //useTransactions function takes one parameter which is the title

    return (
        <Card className={title === "Income" ? classes.income : classes.expense}>
            <CardHeader title={title} />
            <CardContent>
                <Typography variant="h5">${total}</Typography>
                <Doughnut data={chartData} />
            </CardContent>
        </Card>
    )
}

export default Details
