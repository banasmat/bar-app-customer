import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { connect } from "react-redux";
import MenuItemPanel from "./MenuItemPanel";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,
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
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <ListItemAvatar>
                                        <Avatar alt={menuItem.name} />
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
                                                {menuItem.price/100} zł
                                            </React.Fragment>
                                        }
                                    />
                                </ExpansionPanelSummary>
                                <Divider />
                                <ExpansionPanelDetails>
                                    <MenuItemPanel menuItem={menuItem}/>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </ListItem>
                    )
            })}
        </List>
    );
};

export default connect(mapStateToProps)(MenuList);
