import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
    table: {
        borderCollapse: 'initial',
    },
    lastTableRow: {
        borderTop: '1px solid #797979',
    },
}));

const mapStateToProps = state => {
    return { cart: state.cart };
};

const CartList = ({ cart }) => {

    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableBody>
                    {Object.values(cart.items).map((cartItem) => (
                        <TableRow key={cartItem.menuItem.id}>
                            <TableCell align="left">{cartItem.menuItem.name}</TableCell>
                            <TableCell align="right">x{cartItem.count}</TableCell>
                            <TableCell align="right">{cartItem.menuItem.price/100} zł</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell  className={classes.lastTableRow} align="right" colSpan={2}>Razem:</TableCell>
                        <TableCell  className={classes.lastTableRow} align="right">{cart.price / 100} zł</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default connect(mapStateToProps)(CartList);
