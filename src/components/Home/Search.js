import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { getPlacesData } from "../../actions/index";
import { useHistory } from "react-router-dom";
import {PLACES_DATA_LOADED} from "../../constants/action-types";

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

const Search = ({ getPlacesData }) => {

    const history = useHistory();
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (e) => {
        setSearchValue(e.currentTarget.value);
        getPlacesData(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/lokale/" + searchValue);
    };

    const classes = useStyles();

    return (
        <Paper
            component="form"
            className={classes.root}
            onSubmit={handleSubmit}
        >
            <InputBase
                className={classes.input}
                placeholder="Wpisz nazwę lokalu"
                inputProps={{'aria-label': 'Wpisz nazwę lokalu'}}
                onChange={handleInputChange}
                value={searchValue}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon/>
            </IconButton>
        </Paper>
    );
};

export default connect(null, { getPlacesData })(Search);
