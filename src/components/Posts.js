import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

const mapStateToProps = state => {
    return { articles: state.remoteArticles.slice(0, 10) };
};

const Posts = ({ articles, getData }) => {

    useEffect(() => {
        // calling the new action creator
        getData();
    });

    return (<ul>
        {articles.map(el => (
            <li key={el.id}>{el.title}</li>
        ))}
    </ul>)
};

export default connect(mapStateToProps, { getData })(Posts);