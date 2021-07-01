import React from "react"
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from "@material-ui/core"

import useStyles from "./styles"
import Form from "./Form/Form"
import List from "./List/List"

const Main = () => {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardHeader title="Track Expenses" subheader="If you invest instead of buying guac then you can become a billionaire" />
            <CardContent>
                <Typography align="center" variant="h5">
                    Total Balance $100
                </Typography>
                <Typography variant="subtitle1" style={{ lineHeight: "1.5em", marginTop: "20px" }}>
                    {/* Info card */}
                    Speechly say something
                </Typography>
                <Divider />
                <Form />
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
