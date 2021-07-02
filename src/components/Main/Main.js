import React, { useContext } from "react"
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from "@material-ui/core"

import useStyles from "./styles"
import Form from "./Form/Form"
import List from "./List/List"
import { TrackExpenseContext } from "../../context/context"

const Main = () => {
    const classes = useStyles()
    const { balance } = useContext(TrackExpenseContext)

    return (
        <Card className={classes.root}>
            <CardHeader title="Track Expenses" subheader="Instead of buying extra guac, invest" />
            <CardContent>
                <Typography align="center" variant="h5">
                    Total Balance ${balance}
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
