import React, {useEffect} from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import CartList from "./CartList";
import PaymentButton from "./PaymentButton";

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
}));

const mapStateToProps = state => {
    return { cart: state.cart };
};


const Cart = ({ cart }) => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Box p={4} pb={10}>
                <CartList/>
            </Box>
            <Box p={4} pb={10}>
                <PaymentButton/>
            </Box>
        </React.Fragment>
    );
};

export default connect(mapStateToProps)(Cart);
