import React, {useEffect} from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { getPlacesData } from "../actions/index";
import Box from "@material-ui/core/Box";
import SearchResults from "./Home/SearchResults";
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

const Places = ({ getPlacesData }) => {
    let params = useParams();

    useEffect(() => {
        getPlacesData(params.searchValue);
    });

    const classes = useStyles();

    return (
        <section className={classes.banner}>
            <Box p={4} pb={10}>
                <SearchResults />
            </Box>
        </section>
    );
};

export default connect(null, { getPlacesData })(Places);
