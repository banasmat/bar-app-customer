import React, {useEffect} from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import CartList from "./CartList";

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
        <section className={classes.banner}>
            <Box p={4} pb={10}>
                <CartList/>
            </Box>
        </section>
    );
};

export default connect(mapStateToProps)(Cart);
