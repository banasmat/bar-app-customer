import React from "react";
import Search from './Search';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({

}));

function Home(props){
    return (
        <div>
            <h1>Bar app</h1>
            <Search />
        </div>
    );
}

export default Home;