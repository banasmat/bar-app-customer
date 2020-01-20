import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NumericInput from 'react-numeric-input';
import Fab from '@material-ui/core/Fab';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import { addToCart } from "../actions/index";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
    expandablePanel: {
        flexGrow: 1,
    },
    amountInput: {
        display: "block"
    },
    amountInputLabel: {
        display: "block"
    },
}));

const mapStateToProps = (state, ownProps) => ({
    menuItem: ownProps.menuItem
});

const MenuItemPanel = ({ menuItem, addToCart }) => {

    const classes = useStyles();
    const [menuItemCount, setMenuItemCount] = useState(1);

    function handleAddToCartClick(e) {
        addToCart(menuItem, menuItemCount)
    }

    function handleCountInputChange(e) {
        setMenuItemCount(e);
    }

    return (
            <Grid
                container
                spacing={2}
                className={classes.expandablePanel}
                justify="space-between"
            >
                <Grid item xs={4}>
                    <FormLabel className={classes.amountInputLabel}>
                        Ilość
                    </FormLabel>
                    <NumericInput
                        mobile
                        className={classes.amountInput}
                        step={ 1 }
                        min={ 1 }
                        max={ 100 }
                        precision={ 0 }
                        value={ menuItemCount }
                        size={ 1 }
                        data-menuItemid={menuItem.id}
                        onChange={handleCountInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Fab
                        variant="extended"
                        color="primary"
                        aria-label="add"
                        className={classes.margin}
                        onClick={handleAddToCartClick}
                        data-menuItemid={menuItem.id}
                    >
                        Dodaj do zamówienia
                    </Fab>
                </Grid>
            </Grid>
    );
};

export default connect(mapStateToProps, { addToCart })(MenuItemPanel);
