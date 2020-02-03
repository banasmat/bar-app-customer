import React, {useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {

    }
}));

export default function OrderStatus(){

    const classes = useStyles();

    //TODO ping backend for status

    return (
        <Box p={4} pb={10} className={classes.root}>
            <Typography variant="h5" gutterBottom>
                Twoje zamówienie jest przetwarzane
            </Typography>
        </Box>
    );
}
