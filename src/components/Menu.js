import React, {useEffect} from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { getMenuData } from "../actions/index";
import MenuList from "./MenuList";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
import PlaceSearchResults from "./PlaceSearchResults";
import {
    useParams
} from "react-router-dom";
import {PLACES_DATA_LOADED} from "../constants/action-types";

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



const Menu = ({ getMenuData }) => {
    let params = useParams();

    useEffect(() => {
        getMenuData(params.placeId);
    });

    const classes = useStyles();

    return (
        <section className={classes.banner}>
            <Box p={4} pb={10}>
                <MenuList/>
            </Box>
        </section>
    );
};

export default connect(null, { getMenuData })(Menu);
