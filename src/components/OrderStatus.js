import React, {useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {checkOrderStatus} from "../actions/index";
import {connect} from "react-redux";
import {ORDER_STATUS_CHECK_INTERVAL} from "../constants/config";
import {
    ORDER_STATUS_ACCEPTED, ORDER_STATUS_FINISHED,
    ORDER_STATUS_IN_PROGRESS,
    ORDER_STATUS_NONE,
    ORDER_STATUS_ORDERED, ORDER_STATUS_READY
} from "../constants/order-status";

const useStyles = makeStyles(theme => ({
    root: {

    }
}));

const mapStateToProps = state => {
    return {
        orderId: state.currentOrderId,
        orderStatus: state.orderStatus
    };
};

function OrderStatus({orderId, orderStatus, checkOrderStatus}){

    const classes = useStyles();
    let checkStatusTimeout;

    function checkStatus(){
        if(orderStatus !== ORDER_STATUS_FINISHED && null !== orderId){
            checkStatusTimeout = setTimeout(()=>{
                checkOrderStatus(orderId);
                checkStatus();
            }, ORDER_STATUS_CHECK_INTERVAL)
        }
    }

    useEffect(() => {
        checkOrderStatus(orderId);
        checkStatus();
    }, []);

    let text = '';
    switch(orderStatus){
        case ORDER_STATUS_NONE:
            break;
        case ORDER_STATUS_ORDERED:
            text = 'Oczekiwanie na potwierdzenie płatności.';
            break;
        case ORDER_STATUS_ACCEPTED:
            text = 'Zamówienie zostało przyjęte.';
            break;
        case ORDER_STATUS_IN_PROGRESS:
            text = 'Zamówienie jest przygotowywane.';
            break;
        case ORDER_STATUS_READY:
            text = 'Zamówienie gotowe do odbioru.';
            //TODO vibrate
            break;
        case ORDER_STATUS_FINISHED:
            text = 'Odebrano zamówienie. Dziękujemy.';
            clearTimeout(checkStatusTimeout);
            break;
    }

    return (
        <Box p={4} pb={10} className={classes.root}>
            <Typography variant="h5" gutterBottom>
                {text}
            </Typography>
        </Box>
    );
}

export default connect(mapStateToProps, { checkOrderStatus })(OrderStatus);