import React, {useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#fff",
    },
    modal: {
        position: 'absolute',
        width: "100%",
        height: "100%",
        padding: theme.spacing(2, 4, 3),
        textAlign: "center"
    }
}));

export default function PaymentMock(){

    const classes = useStyles();

    useEffect(() => {
        setTimeout(function(){
            window.location.replace('/order-status');
        }, 5000);
    });

    return (
        <Modal
            className={classes.root}
            open="true"
        >
            <div className={classes.paper}>
                <h2>Dokonywanie płatności. Za chwilę nastąpi przekierowanie na stronę sprzedawcy.</h2>
            </div>
        </Modal>
    );
}
