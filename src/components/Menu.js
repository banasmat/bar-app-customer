import React, {useEffect} from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { getMenuData } from "../actions/index";
import MenuList from "./MenuList";
import Box from "@material-ui/core/Box";
import AppBar from '@material-ui/core/AppBar';
import {
    useParams,
    Link,
} from "react-router-dom";

import {PLACES_DATA_LOADED} from "../constants/action-types";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Fab from "@material-ui/core/Fab";

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
    bottomBar: {
        top: 'auto',
        bottom: 0,
        alignItems: 'center',
    },
}));

const mapStateToProps = state => {
    return { cart: state.cart };
};

const Menu = ({ cart, getMenuData }) => {
    let params = useParams();

    useEffect(() => {
        getMenuData(params.placeId);
    });

    const classes = useStyles();

    let bottomBar = <></>;
    if(Object.values(cart.items).length > 0){
        bottomBar = (
            <AppBar position="fixed" color="primary" className={classes.bottomBar}>
                {/*<Toolbar>*/}
                    <Link
                        to="/cart"
                    >
                        <Fab
                            variant="extended"
                            color="secondary"
                        >
                            Zamów ({cart.price / 100} zł)
                        </Fab>
                    </Link>
                {/*</Toolbar>*/}
            </AppBar>
        )
    }

    return (
        <React.Fragment>
        <section className={classes.banner}>
            <Box p={4} pb={10}>
                <MenuList/>
            </Box>
        </section>
        {bottomBar}
        </React.Fragment>
    );
};

export default connect(mapStateToProps, { getMenuData })(Menu);
