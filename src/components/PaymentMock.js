import React, {useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {ORDER_STATUS} from "../constants/urls";
import {connect} from "react-redux";
import {ORDER_STATUS_ACCEPTED} from "../constants/order-status";

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

const mapStateToProps = state => {
    return {
        orderId: state.currentOrderId
    };
};

function PaymentMock({ orderId }){

    const classes = useStyles();

    useEffect(() => {

        fetch(ORDER_STATUS.replace('{orderId}', orderId), {
            method: "POST",
            body: JSON.stringify({
                'status': ORDER_STATUS_ACCEPTED
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });


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

export default connect(mapStateToProps)(PaymentMock);
