import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import { getMenuData } from "../actions/index";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'absolute',
        zIndex: 100,
    },
    listItemTitle: {
        display: "block"
    },
}));

const mapStateToProps = state => {
    return { menuItems: state.remoteMenuItems };
};

const MenuList = ({ menuItems }) => {

    const classes = useStyles();

    return (
        <List className={classes.root}>
            {menuItems.map((menuItem) => {
                return (<ListItem key={menuItem.id} alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt={menuItem.name} src={menuItem.imgUrl} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={menuItem.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            color="textPrimary"
                                            className={classes.listItemTitle}
                                        >
                                            {menuItem.name}
                                        </Typography>
                                        {menuItem.price}
                                    </React.Fragment>
                                }
                            />
                            <Divider variant="inset" component="li" />
                        </ListItem>
                    )
            })}
        </List>
    );
};

export default connect(mapStateToProps)(MenuList);
